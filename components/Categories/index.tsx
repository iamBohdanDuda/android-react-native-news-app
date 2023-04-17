import React, { useState } from "react";
import { Box, HStack } from "native-base";
import { ScrollView } from "react-native";
import { CategoryItem } from "./CategoryItem";
import { deselectCategory, selectCategory } from "../../actions";

interface CategoriesProps {
    dispatch: any,
    state: any
}

export const Categories: React.FC<CategoriesProps> = ({dispatch, state}) => {
    const [pressed, setPressed] = useState(false);

    const categorySelected = state.userPreferences.categorySelected;

    const handleCategoryPress = (category) => {
        const categoryPressed = category.toLowerCase();
        if (categoryPressed === 'all') {
            dispatch(deselectCategory())
        }
        else {
            categorySelected === categoryPressed ? dispatch(deselectCategory()) : dispatch(selectCategory(categoryPressed));
        }
        console.log(categorySelected);
        
    }

    return (
        <Box marginY={2}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <HStack space={2} marginX={2}>
                    {(getNewsCategories(state).length >= 1) && <CategoryItem onPress={() => handleCategoryPress('all')}  key="all">All</CategoryItem>}
                    {getNewsCategories(state).map(el => <CategoryItem onPress={() => handleCategoryPress(el)}  key={el}>{el}</CategoryItem>)}
                </HStack>
            </ScrollView>
        </Box>
    )
}

const getNewsCategories = (state) => {
    const categories = state.news.posts.map(post => post.category[0]);    
    const categoriesSet = new Set<string>(categories);    
    const categoriesUnique: string[] = Array.from(categoriesSet);
    const capitalizedCategoriesArray = categoriesUnique.map(category => category.charAt(0).toUpperCase() + category.slice(1));
    
    return capitalizedCategoriesArray;
}

/*<CategoryItem id="all">All</CategoryItem>
                        <CategoryItem id="">Top</CategoryItem>
                        <CategoryItem id="">Entertainment</CategoryItem>
                        <CategoryItem id="">Technology</CategoryItem>
                        <CategoryItem id="">World</CategoryItem>
                        <CategoryItem id="">Environment</CategoryItem>
                        <CategoryItem id="">Science</CategoryItem>
                        <CategoryItem id="">Business</CategoryItem>
                        <CategoryItem id="">Sports</CategoryItem>
                        <CategoryItem id="">Politics</CategoryItem>
                        <CategoryItem id="">Tourism</CategoryItem>
                        <CategoryItem id="">Food</CategoryItem>
                        <CategoryItem id="">Health</CategoryItem>*/