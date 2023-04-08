import { AspectRatio, Box, Button, Heading, Image, NativeBaseProvider, Text, VStack } from "native-base";
import React from "react";
import { Linking, SafeAreaView, ScrollView, View } from "react-native";
import styles from "../LearningAppStyles";
import { theme } from "../extendTheme";

interface NewsDetailsProps {
    navigation: any,
    route: any
}

export const NewsDetails: React.FC<NewsDetailsProps> = ({navigation, route}) => {    
    const { title, imageUrl, text, link, creator, pubDate } = route.params;

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView>
                <View style={styles.container}>
                    <NativeBaseProvider theme={theme}>
                        <Box variant="articleContainer">
                            <VStack space={4}>
                                <Heading>{title}</Heading>
                                {imageUrl && <AspectRatio width="100%" ratio={16/9}>
                                    <Image source={{ uri: `${imageUrl}` }} alt="image" borderRadius="2xl"/>
                                </AspectRatio>}
                                <Text>{text}</Text>
                                {creator && <Heading size="sm">By {creator}, published {pubDate}</Heading>}
                                <Box variant="bottomBoxWrapper">
                                    <Button onPress={() => Linking.openURL(link)} variant="infoButtonLarge">
                                        <Text variant="infoButtonLargeText">Read on website</Text>
                                    </Button>
                                </Box>
                            </VStack>
                        </Box>
                    </NativeBaseProvider>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}