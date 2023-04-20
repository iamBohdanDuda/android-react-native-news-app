import React from "react";
import { Box, Select, Heading, VStack } from "native-base";
import { selectCountry } from "../../actions";

interface CountryItem {
    label: string,
    value: string
}

interface CountrySelectionProps {
    dispatch: any,
    countrySelected: string,
    countriesList: CountryItem[]
}

export const CountrySelection: React.FC<CountrySelectionProps> = ({dispatch, countrySelected, countriesList}) => {
    return (
        <VStack variant="settingsWrapper">
            <Box px="4">
                <Heading size="md">Country of origin of the news</Heading>                
            </Box>
            <Box pt="4" px="4">
                <Select placeholder="Choose country" accessibilityLabel="Choose country"
                onValueChange={(itemValue) => dispatch(selectCountry(itemValue))} selectedValue={countrySelected}>
                    {countriesList.map(countriesItem => <Select.Item key={countriesItem.value} label={countriesItem.label} value={countriesItem.value}/>)}
                </Select>
            </Box>
        </VStack>
    )
}