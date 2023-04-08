import React, { useEffect } from "react";
import { 
    SafeAreaView,
    View,
    ScrollView,
    RefreshControl
} from "react-native";
import styles from "../LearningAppStyles";
import { useState } from "react";
import { NativeBaseProvider, Button, Text, VStack, Box, Divider } from "native-base";
import { useWindowDimensions, Dimensions, Platform } from "react-native";
import { NewsCard } from "./NewsCard";
import { Categories } from "./Categories";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchNews } from "../actions";
import { theme } from "../extendTheme";


export const HomeScreen = ({navigation}) => {
    const [refreshing, setRefreshing] = useState(false);

    const state = useAppSelector(state => state);
    const posts = state.news.posts;
    const isLoading = state.news.isLoading;
    const isRefreshing = state.news.isRefreshing;
    
    const languageSelected = state.userPreferences.languageSelected;
    const countrySelected = state.userPreferences.countrySelected;
    const categorySelected = state.userPreferences.categorySelected;

    const dispatch = useAppDispatch();


    const onRefresh = () => {
        dispatch(fetchNews(languageSelected, countrySelected));
    }

    console.log('next p ' + state.news.nextPage);
    console.log(state);
    
    

    const screen = Dimensions.get('screen');
    const window = Dimensions.get('window');

    const { height, width } = useWindowDimensions();

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
                                dispatch(fetchNews(languageSelected, countrySelected, state.news.nextPage));
                                
                                }}><Text variant="infoButtonLargeText">Load More</Text>
                            </Button>
                        </Box>}
                    </NativeBaseProvider>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}