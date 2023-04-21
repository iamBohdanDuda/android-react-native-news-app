import React from "react";
import { Box, Select, Heading, VStack } from "native-base";

interface SelectionItem {
    label: string,
    value: string
}

interface CountrySelectionProps {
    dispatch: any,
    valueSelected: string,
    selectionList: SelectionItem[],
    children: React.ReactNode,
    onSelectHandler: (value: string) => void
}

export const Selection: React.FC<CountrySelectionProps> = ({dispatch, valueSelected, selectionList, children, onSelectHandler}) => {
    return (
        <VStack variant="settingsWrapper">
            <Box variant="settingsHeadingWrapper">
                <Heading size="md">{children}</Heading>                
            </Box>
            <Box variant="settingsSelectWrapper">
                <Select placeholder="Choose country" accessibilityLabel="Choose country"
                onValueChange={(itemValue) => dispatch(onSelectHandler(itemValue))} selectedValue={valueSelected}>
                    {selectionList.map(countriesItem => <Select.Item key={countriesItem.value} label={countriesItem.label} value={countriesItem.value}/>)}
                </Select>
            </Box>
        </VStack>
    )
}