import React from "react";
import { 
    SafeAreaView,
    View,
    ScrollView,
    RefreshControl
} from "react-native";
import styles from "../AppStyles";
import { NativeBaseProvider, Button, Text, VStack, Box, Divider } from "native-base";
import { NewsCard } from "./NewsCard";
import { Categories } from "./Categories";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchNews } from "../actions";
import { theme } from "../extendTheme";
import { InternetConnectionAlert } from "./InternetConnectionAlert";


export const HomeScreen = ({navigation}) => {
    const state = useAppSelector(state => state);
    const posts = state.news.posts;
    const isLoading = state.news.isLoading;
    const isRefreshing = state.news.isRefreshing;
    const connectionErrorAlertVisible = state.alerts.connectionErrorAlertVisible;
    const nextPage = state.news.nextPage;
    
    const languageSelected = state.userPreferences.languageSelected;
    const countrySelected = state.userPreferences.countrySelected;
    const categorySelected = state.userPreferences.categorySelected;

    const dispatch = useAppDispatch();


    const onRefresh = () => {
        dispatch(fetchNews(languageSelected, countrySelected));
    }

    console.log('next p ' + state.news.nextPage);
    console.log(state);
    
    let key = 1;

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>
            }>
                <View style={styles.container}>
                    <NativeBaseProvider theme={theme}>
                        <Categories state={state} dispatch={dispatch}/>
                        <Box variant="postsContainer">
                            {connectionErrorAlertVisible && <InternetConnectionAlert/>}
                            <VStack space="4" divider={<Divider/>}>
                                {posts.map(post => {
                                                        if (categorySelected.length) {                                                            
                                                            if (categorySelected == post.category) {                                                                
                                                                return <NewsCard title={post.title} imageSrc={post.image_url} 
                                                                                key={key++} pubDate={post.pubDate}
                                                                                creator={post.creator} description={post.description}
                                                                                link={post.link} text={post.content} 
                                                                                navigation={navigation}/>
                                                            }
                                                        }
                                                        else {
                                                            return <NewsCard title={post.title} imageSrc={post.image_url} 
                                                                    key={key++} pubDate={post.pubDate}
                                                                    creator={post.creator} description={post.description}
                                                                    link={post.link} text={post.content} 
                                                                    navigation={navigation}/>
                                                        }
                                                    })}
                            </VStack>
                        </Box>
                        {(posts.length >= 1) && <Box variant="bottomBoxWrapper">
                            <Button isLoading={isLoading} variant="infoButtonLarge" onPress={() => {                             
                                dispatch(fetchNews(languageSelected, countrySelected, nextPage));
                                
                                }}><Text variant="infoButtonLargeText">Load More</Text>
                            </Button>
                        </Box>}
                    </NativeBaseProvider>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}