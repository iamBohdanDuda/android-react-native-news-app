import React from "react";
import { Box, Select, Heading, VStack } from "native-base";

interface CountrySelectionProps<T> {
    valueSelected: string,
    selectionList: T[],
    placeholder: string,
    renderItem: (item: T) => React.ReactNode,
    children: React.ReactNode,
    onSelectHandler: (value: string) => void
}

export function Selection<T> (props: CountrySelectionProps<T>) {
    const {valueSelected, selectionList, placeholder, children, onSelectHandler, renderItem} = props;

    return (
        <VStack variant="settingsWrapper">
            <Box variant="settingsHeadingWrapper">
                <Heading size="md">{children}</Heading>                
            </Box>
            <Box variant="settingsSelectWrapper">
                <Select placeholder={placeholder} accessibilityLabel="Choose country"
                onValueChange={(itemValue) => onSelectHandler(itemValue)} selectedValue={valueSelected}>
                    {selectionList.map(renderItem)}
                </Select>
            </Box>
        </VStack>
    )
}