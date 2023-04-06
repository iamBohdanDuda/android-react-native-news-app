import React from "react";
import { HStack, Box, Text, Select } from "native-base";
import { selectLanguage } from "../actions";

interface LanguageSelectionProps {
    dispatch: any,
    languageSelected: string
}

export const LanguageSelection: React.FC<LanguageSelectionProps> = ({dispatch, languageSelected}) => {
    

    return (
        <HStack>
            <Box pt="4" px="4">
                <Text>News language</Text>                    
            </Box>
            <Box pt="4" px="4">
                <Select accessibilityLabel="Choose language" placeholder="Choose language" w={160}
                onValueChange={(itemValue) => dispatch(selectLanguage(itemValue))} selectedValue={languageSelected}>
                    <Select.Item label="English" value="en"/>
                    <Select.Item label="Czech" value="cs"/>
                    <Select.Item label="French" value="fr"/>
                    <Select.Item label="German" value="de"/>
                    <Select.Item label="Hindi" value="hi"/>
                    <Select.Item label="Italian" value="it"/>
                    <Select.Item label="Japanese" value="jp"/>
                    <Select.Item label="Korean" value="ko"/>
                    <Select.Item label="Polish" value="pl"/>
                    <Select.Item label="Spanish" value="es"/>
                    <Select.Item label="Swedish" value="sv"/>
                    <Select.Item label="Ukrainian" value="uk"/>
                    <Select.Item label="Czech" value="cs"/>
                </Select>
            </Box>
        </HStack>
    )
}