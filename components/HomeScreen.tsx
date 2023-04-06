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


export const HomeScreen = ({navigation}) => {
    const [refreshing, setRefreshing] = useState(false);
    const [orientation, setOrientation] = useState('');

    const state = useAppSelector(state => state);
    const posts = state.news.posts;
    const languageSelected = state.userPreferences.languageSelected;
    const countrySelected = state.userPreferences.countrySelected;
    const categorySelected = state.userPreferences.categorySelected;

    const dispatch = useAppDispatch();


    const onRefresh = () => {
        setRefreshing(true);
        dispatch(fetchNews(languageSelected, countrySelected));
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);        
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
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
                <View style={styles.container}>
                    <NativeBaseProvider>
                        <Categories state={state} dispatch={dispatch}/>
                        <Box marginX="10px">
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
                        {(posts.length >= 1) && <Box alignItems="center" m={10}>
                            <Button borderRadius="2xl" w="50%" colorScheme="info"  onPress={() => {                             
                                dispatch(fetchNews(languageSelected, countrySelected, state.news.nextPage));
                                
                                }}><Text color="white" fontSize="md" 
                                    fontWeight="bold">Load More</Text>
                            </Button>
                        </Box>}
                    </NativeBaseProvider>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

/*<View style={styles.container}>
                    <Text onPress={() => setOwnStyle(!ownStyle)} style={ownStyle ? styles.firstSentence : styles.secondSentence}>First sentence js</Text>
                    <Text style={styles.secondSentence}>Second sentence js</Text>
                    <Text style={styles.thirdSentence}>Third sentence js</Text>
    </View>
   
    <Box borderRadius="md">
                            <Button onPress={() => {                             
                                dispatch(fetchNews())
                                console.log(state);
                                }}>Load News
                            </Button>
                        </Box>
    */