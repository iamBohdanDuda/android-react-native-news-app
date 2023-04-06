import React, { useState } from "react";
import { View } from "react-native";
import { Image, Text, Button, Box, Stack, VStack, Heading, AspectRatio } from "native-base";
import styles from "../LearningAppStyles";

interface NewsCardProps {
    title: string,
    imageSrc?: string,
    pubDate: string,
    creator?: string[],
    description: string,
    link: string,
    navigation?: any,
    text: string
}

export const NewsCard: React.FC<NewsCardProps> = (props) => {
    const { title, imageSrc, pubDate, creator, description, link, navigation, text } = props
    let imageUrl = formUrl(imageSrc);    
        
    return (
        <Box rounded="xl" borderColor="coolGray.200" borderWidth={1} overflow="hidden">
            <VStack>
                {imageSrc && <AspectRatio w="100%" ratio={16/9}>
                    <Image source={{ uri: `${imageUrl}` }} alt="image"/>
                </AspectRatio>}
                <Box>
                    <Stack p="4">
                        <Stack space={2}>
                            <Heading>{title}</Heading>
                            <Stack direction='row' space={4}>
                                {creator && <Text>{creator[0]}</Text>}
                                <Text>{calculateElapsedTime(pubDate)}</Text>
                            </Stack>
                            <Text>{description}</Text>
                            <Button borderRadius="2xl" onPress={() => navigation.navigate('NewsDetails', { title, text, imageUrl, link })} size="sm" colorScheme="info" w="30%">Read more</Button>
                        </Stack>
                    </Stack>
                </Box>
            </VStack>
        </Box>
    );
}

const formUrl = (url) => {
    if (url && url?.startsWith('//')) {
        return 'http:' + url;
    }
    else {
        return url;
    }
}

const calculateElapsedTime = (pubDate) => {
    let elapsedTime;
    const publicationTime = new Date(pubDate);
    const currentTime = new Date();
    const elapsedTimeMilliseconds = currentTime.getTime() - publicationTime.getTime();
    const elapsedTimeSeconds = Math.floor(elapsedTimeMilliseconds / 1000);
    const elapsedTimeMinutes = Math.floor(elapsedTimeSeconds / 60);
    const elapsedTimeHours = Math.floor(elapsedTimeMinutes / 60);
    const elapsedTimeDays = Math.floor(elapsedTimeHours / 24);

    if (elapsedTimeMinutes >= 1) {
        if (elapsedTimeHours >= 1) {
            if (elapsedTimeDays >= 1) {
                elapsedTime = `${elapsedTimeDays} ${(elapsedTimeDays >= 2) ? 'days' : 'day'} ago`;
            }
            else {
                elapsedTime = `${elapsedTimeHours} ${(elapsedTimeHours >= 2) ? 'hours' : 'hour'} ago`;
            }
        }
        else {
            elapsedTime = `${elapsedTimeMinutes} ${(elapsedTimeMinutes >= 2) ? 'minutes' : 'minute'} ago`;
        }
    }
    else {
        elapsedTime = 'Now';
    }

    return elapsedTime;    
}