import React from "react";
import { Alert, HStack, Text, VStack } from "native-base";

export const InternetConnectionAlert: React.FC = () => {
    return (
        <Alert w="100%" status="error">
            <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} justifyContent="space-between">
                    <HStack space={2} flexShrink={1}>
                        <Text fontSize="md" color="coolGray.800">
                            Check your Internet connection
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
        </Alert>
    )
}