import React from "react";
import { Box, Text } from "native-base";

interface CategoryItemProps {
    children: any,
}

export const CategoryItem: React.FC<CategoryItemProps> = ({children}) => {
    return (
        <Box borderWidth={1} borderRadius="2xl" paddingY={1} paddingX={2}>
            <Text fontSize="md">{children}</Text>
        </Box>
    )
}