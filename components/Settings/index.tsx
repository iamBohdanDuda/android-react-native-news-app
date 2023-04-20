import React from "react";
import { NativeBaseProvider, VStack, Divider } from "native-base";
import { SafeAreaView, View } from "react-native";
import styles from "../../AppStyles";
import { CountrySelection } from "./CountrySelection";
import { LanguageSelection } from "./LanguageSelection";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { theme } from "../../extendTheme";



export const Settings: React.FC = () => {
    const state = useAppSelector(state => state);
    const { counriesList, languagesList } = state.data;
    const { languageSelected, countrySelected } = state.userPreferences;

    const dispatch = useAppDispatch();

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <NativeBaseProvider theme={theme}>
                    <VStack space={4} divider={<Divider/>}>
                        <LanguageSelection dispatch={dispatch} languageSelected={languageSelected} languageList={languagesList}/>
                        <CountrySelection dispatch={dispatch} countrySelected={countrySelected} countriesList={counriesList}/>
                    </VStack>
                </NativeBaseProvider>
            </View>
        </SafeAreaView>
    )
}