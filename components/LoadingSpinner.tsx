import { Box, Center, Spinner } from "native-base";
import React from "react";

export const LoadingSpinner: React.FC = () => {
    return (
            <Box marginX={2}>
                <Center flex={1}>
                    <Spinner size="lg"/>
                </Center>
            </Box>
    )
}