import { Box, Button, Text } from "native-base";
import React from "react";
import { fetchNews } from "../../actions";

interface LoadMoreButtonProps {
    posts: any[],
    dispatch: any,
    isLoading: boolean,
    languageSelected: string,
    countrySelected: string,
    nextPage: string,
    query: string | undefined
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({posts, dispatch, isLoading, countrySelected, 
                                                                languageSelected, nextPage, query}) => {
    if (posts.length >= 1) {
        return (
            <Box variant="bottomBoxWrapper">
                <Button isLoading={isLoading} variant="infoButtonLarge" onPress={() => {                             
                    dispatch(fetchNews(languageSelected, countrySelected, nextPage, query));
                    
                    }}><Text variant="infoButtonLargeText">Load More</Text>
                </Button>
            </Box>
        )
    }
    else {
        return null;
    }
}