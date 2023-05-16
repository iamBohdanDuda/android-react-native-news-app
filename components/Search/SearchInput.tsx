import { HStack, Icon, Input, Pressable } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons"
import React, { useState } from "react";
import { fetchNews } from "../../actions";
import { LoadingSpinner } from "../LoadingSpinner";

interface SearchInputProps {
    dispatch: any,
    countrySelected: string,
    languageSelected: string,
    isLoading: boolean,
    queryChangeHandler: (text: string) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({dispatch, countrySelected, languageSelected, isLoading, queryChangeHandler}) => {
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
                {isLoading ? 
                <LoadingSpinner/> :
                <Pressable m={4} onPress={onSearchHandle}>
                    <Icon size={5} as={<Ionicons name="search-outline"></Ionicons>}></Icon>
                </Pressable>}
            </HStack>
        } variant="roundedInput" placeholder="Start typing here"/>
    )
}