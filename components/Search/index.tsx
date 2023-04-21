import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "../../AppStyles";
import { NativeBaseProvider } from "native-base";
import { SearchInput } from "./SearchInput";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { theme } from "../../extendTheme";
import { deselectSearchCategory, selectSearchCategory } from "../../actions";
import { Results } from "../Results";
import { Categories } from "../Categories";
import { LoadMoreButton } from "../Buttons/LoadMoreButton";

interface SearchProps {
    navigation: any
}

export const Search: React.FC<SearchProps> = ({navigation}) => {
    const state = useAppSelector(state => state);
    const { countrySelected, languageSelected, searchCategorySelected } = state.userPreferences;
    const { searchPagePosts, isLoading, searchResultsNextPage } = state.news;
    const { connectionErrorAlertVisible } = state.alerts;

    const dispatch = useAppDispatch();

    const [query, setQuery] = useState('');

    const queryChangeHandler = (text) => setQuery(text);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView>
                <View style={styles.container}>
                    <NativeBaseProvider theme={theme}>
                        <SearchInput queryChangeHandler={queryChangeHandler} dispatch={dispatch} countrySelected={countrySelected} languageSelected={languageSelected}/>
                        <Categories dispatch={dispatch} posts={searchPagePosts} currentCategorySelected={searchCategorySelected}
                                    onSelect={selectSearchCategory} onDeselect={deselectSearchCategory}/>
                        <Results navigation={navigation} connectionErrorAlertVisible={connectionErrorAlertVisible}
                                categorySelected={searchCategorySelected} posts={searchPagePosts}/>
                        <LoadMoreButton posts={searchPagePosts} countrySelected={countrySelected} dispatch={dispatch}
                                        isLoading={isLoading} languageSelected={languageSelected} nextPage={searchResultsNextPage}
                                        query={query}/>
                    </NativeBaseProvider>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}