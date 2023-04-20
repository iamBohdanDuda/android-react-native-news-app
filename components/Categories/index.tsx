import React from "react";
import { Box, HStack } from "native-base";
import { ScrollView } from "react-native";
import { CategoryItem } from "./CategoryItem";

interface NewsPost {
    category: string
}

interface CategoriesProps {
    posts: NewsPost[],
    currentCategorySelected: string,
    dispatch: any,
    onSelect: (category: string) => void,
    onDeselect: () => void
}

export const Categories: React.FC<CategoriesProps> = ({dispatch, posts, currentCategorySelected, onSelect, onDeselect}) => {
    const categorySelected = currentCategorySelected;

    const handleCategoryPress = (category) => {
        const categoryPressed = category.toLowerCase();
        if (categoryPressed === 'all') {
            dispatch(onDeselect())
        }
        else {
            categorySelected === categoryPressed ? dispatch(onDeselect()) : dispatch(onSelect(categoryPressed));
        }
        console.log(categorySelected);
        
    }

    return (
        <Box marginY={2}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <HStack space={2} marginX={2}>
                    {(getNewsCategories(posts).length >= 1) && <CategoryItem onPress={() => handleCategoryPress('all')}  key="all">All</CategoryItem>}
                    {getNewsCategories(posts).map(el => <CategoryItem onPress={() => handleCategoryPress(el)}  key={el}>{el}</CategoryItem>)}
                </HStack>
            </ScrollView>
        </Box>
    )
}

const getNewsCategories = (posts) => {
    const categories = posts.map(post => post.category[0]);    
    const categoriesSet = new Set<string>(categories);    
    const categoriesUnique: string[] = Array.from(categoriesSet);
    const capitalizedCategoriesArray = categoriesUnique.map(category => category.charAt(0).toUpperCase() + category.slice(1));
    
    return capitalizedCategoriesArray;
}