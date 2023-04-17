import React from "react";
import { Button, Text } from "native-base";

interface CategoryItemProps {
    children: any,
    onPress: () => void
}

export const CategoryItem: React.FC<CategoryItemProps> = ({children, onPress}) => {
    return (
        <Button variant="categoryButton" onPress={onPress}>
            <Text variant="white">{children}</Text>
        </Button>
    )
}