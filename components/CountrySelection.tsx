import React from "react";
import { Box, Select, Heading, VStack } from "native-base";
import { selectCountry } from "../actions";

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


/*
<Select.Item label="Worldwide" value="ww"/>
                    <Select.Item label="Australia" value="au"/>
                    <Select.Item label="Austria" value="at"/>
                    <Select.Item label="Belgium" value="be"/>
                    <Select.Item label="Brazil" value="br"/>
                    <Select.Item label="Canada" value="ca"/>
                    <Select.Item label="China" value="cn"/>
                    <Select.Item label="Czech Republic" value="cz"/>
                    <Select.Item label="Denmark" value="dk"/>
                    <Select.Item label="Estonia" value="ee"/>
                    <Select.Item label="Finland" value="fi"/>
                    <Select.Item label="France" value="fr"/>
                    <Select.Item label="Germany" value="de"/>
                    <Select.Item label="India" value="in"/>
                    <Select.Item label="Italy" value="it"/>
                    <Select.Item label="Japan" value="jp"/>
                    <Select.Item label="Netherland" value="nl"/>
                    <Select.Item label="Norway" value="no"/>
                    <Select.Item label="Poland" value="pl"/>
                    <Select.Item label="South Korea" value="kr"/>
                    <Select.Item label="Spain" value="es"/>
                    <Select.Item label="Sweden" value="se"/>
                    <Select.Item label="Switzerland" value="ch"/>
                    <Select.Item label="Taiwan" value="tw"/>
                    <Select.Item label="Ukraine" value="ua"/>
                    <Select.Item label="United Kingdom" value="gb"/>
                    <Select.Item label="United States of America" value="us"/>
*/