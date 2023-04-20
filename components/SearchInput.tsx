import { HStack, Icon, Input, Pressable } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons"
import React, { useState } from "react";
import { fetchNews } from "../actions";

interface SearchInputProps {
    dispatch: any,
    countrySelected: string,
    languageSelected: string,
    queryChangeHandler: (text: string) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({dispatch, countrySelected, languageSelected, queryChangeHandler}) => {
    const [inputValue, setInputValue] = useState('');

    const onSearchHandle = () => {
        dispatch(fetchNews(languageSelected, countrySelected, undefined, inputValue))
    };

    return (
        <Input returnKeyType="search" onSubmitEditing={onSearchHandle} 
            onChangeText={text => {
                setInputValue(text)
                queryChangeHandler(text)
            }} value={inputValue} 
            InputRightElement={
            <HStack bg="blue.50">
                <Pressable m={4} onPress={() => setInputValue('')}>
                    <Icon size={5} as={<Ionicons name="close"></Ionicons>}></Icon>
                </Pressable>
                <Pressable m={4} onPress={onSearchHandle}>
                    <Icon size={5} as={<Ionicons name="search-outline"></Ionicons>}></Icon>
                </Pressable>
            </HStack>
        } m={2} rounded="3xl" placeholder="Find out what is happening in the world"/>
    )
}