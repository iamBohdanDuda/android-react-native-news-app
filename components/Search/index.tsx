import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "../../AppStyles";
import { Box, Button, DeleteIcon, Divider, FormControl, HStack, Heading, Icon, Input, NativeBaseProvider, Pressable, Text, VStack } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons"
import { SearchInput } from "./SearchInput";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { InternetConnectionAlert } from "../Alerts/InternetConnectionAlert";
import { NewsCard } from "../NewsCard";
import { theme } from "../../extendTheme";
import { deselectSearchCategory, fetchNews, selectSearchCategory } from "../../actions";
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