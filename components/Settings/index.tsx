import React from "react";
import { NativeBaseProvider, Select, VStack } from "native-base";
import { SafeAreaView, View } from "react-native";
import styles from "../../AppStyles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { theme } from "../../extendTheme";
import { Selection } from "../Control/Selection";
import { selectCountry, selectLanguage } from "../../actions";



export const Settings: React.FC = () => {
    const state = useAppSelector(state => state);
    const { counriesList, languagesList } = state.data;
    const { languageSelected, countrySelected } = state.userPreferences;

    const dispatch = useAppDispatch();

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <NativeBaseProvider theme={theme}>
                    <VStack space={4}>
                        <Selection selectionList={languagesList} valueSelected={languageSelected}
                                    onSelectHandler={(itemValue) => dispatch(selectLanguage(itemValue))} placeholder="Choose language"
                                    renderItem={countriesItem => <Select.Item key={countriesItem.value} label={countriesItem.label} 
                                                                                value={countriesItem.value}/>}
                                    >News language</Selection>
                        <Selection selectionList={counriesList} valueSelected={countrySelected}
                                    onSelectHandler={(itemValue) => dispatch(selectCountry(itemValue))} placeholder="Choose country"
                                    renderItem={countriesItem => <Select.Item key={countriesItem.value} label={countriesItem.label} 
                                                                                value={countriesItem.value}/>}
                                    >Country of origin of the news</Selection>
                    </VStack>
                </NativeBaseProvider>
            </View>
        </SafeAreaView>
    )
}