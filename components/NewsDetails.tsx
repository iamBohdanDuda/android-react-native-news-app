import { AspectRatio, Box, Button, Heading, Image, NativeBaseProvider, Text, VStack } from "native-base";
import React from "react";
import { Linking, SafeAreaView, ScrollView, View } from "react-native";
import styles from "../LearningAppStyles";

interface NewsDetailsProps {
    navigation: any,
    route: any
}

export const NewsDetails: React.FC<NewsDetailsProps> = ({navigation, route}) => {    
    
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView>
                <View style={styles.container}>
                    <NativeBaseProvider>
                        <Box>
                            <VStack>
                                <Heading>{route.params.title}</Heading>
                                {route.params.imageUrl && <AspectRatio width="100%" ratio={16/9}>
                                    <Image source={{ uri: `${route.params.imageUrl}` }} alt="image"/>
                                </AspectRatio>}
                                <Text>{route.params.text}</Text>
                                <Text></Text>
                                <Button onPress={() => Linking.openURL(route.params.link)} borderRadius="2xl">Read on website</Button>
                            </VStack>
                        </Box>
                    </NativeBaseProvider>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}