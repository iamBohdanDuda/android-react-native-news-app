import React from "react";
import { 
    SafeAreaView,
    View,
    ScrollView,
    RefreshControl
} from "react-native";
import styles from "../AppStyles";
import { NativeBaseProvider } from "native-base";
import { Categories } from "./Categories";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deselectCategory, fetchNews, selectCategory } from "../actions";
import { theme } from "../extendTheme";
import { LoadMoreButton } from "./Buttons/LoadMoreButton";
import { Results } from "./Results";


export const HomeScreen = ({navigation}) => {
    const state = useAppSelector(state => state);
    const { connectionErrorAlertVisible } = state.alerts;
    const { posts, isLoading, isRefreshing, nextPage } = state.news;
    const { languageSelected, countrySelected, categorySelected } = state.userPreferences;

    const dispatch = useAppDispatch();

    const onRefresh = () => {
        dispatch(fetchNews(languageSelected, countrySelected));
    }

    console.log('next p ' + state.news.nextPage);
    console.log(state);
    
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>
            }>
                <View style={styles.container}>
                    <NativeBaseProvider theme={theme}>
                        <Categories posts={posts} currentCategorySelected={categorySelected} dispatch={dispatch}
                                    onSelect={selectCategory} onDeselect={deselectCategory}/>
                        <Results categorySelected={categorySelected} connectionErrorAlertVisible={connectionErrorAlertVisible}
                                navigation={navigation} posts={posts}/>
                        <LoadMoreButton dispatch={dispatch} countrySelected={countrySelected} isLoading={isLoading}
                                        languageSelected={languageSelected} nextPage={nextPage} posts={posts}
                                        query={undefined}/>
                    </NativeBaseProvider>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}