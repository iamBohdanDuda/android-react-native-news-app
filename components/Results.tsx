import { Box, Divider, VStack } from "native-base";
import React from "react";
import { InternetConnectionAlert } from "./InternetConnectionAlert";
import { NewsCard } from "./NewsCard";

interface NewsPost {
    title: string,
    category?: string,
    image_url?: string,
    pubDate: string,
    creator: string[],
    link: string,
    description: string,
    content: string
}

interface ResultsProps {
    navigation: any,
    connectionErrorAlertVisible: boolean,
    posts: NewsPost[],
    categorySelected: string,
}

export const Results: React.FC<ResultsProps> = ({navigation, connectionErrorAlertVisible, posts, categorySelected}) => {
    let key = 1;

    return (
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
    )
}