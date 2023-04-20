import React from "react";
import { Box, Select, Heading, VStack } from "native-base";
import { selectLanguage } from "../../actions";

interface LanguageItem {
    label: string,
    value: string
}

interface LanguageSelectionProps {
    dispatch: any,
    languageSelected: string,
    languageList: LanguageItem[]
}

export const LanguageSelection: React.FC<LanguageSelectionProps> = ({dispatch, languageSelected, languageList}) => {
    return (
        <VStack variant="settingsWrapper">
            <Box px="4">
                <Heading size="md">News language</Heading>                    
            </Box>
            <Box pt="4" px="4">
                <Select accessibilityLabel="Choose language" placeholder="Choose language"
                onValueChange={(itemValue) => dispatch(selectLanguage(itemValue))} selectedValue={languageSelected}>
                    {languageList.map(languageItem => <Select.Item key={languageItem.value} label={languageItem.label} value={languageItem.value}/>)}
                </Select>
            </Box>
        </VStack>
    )
}