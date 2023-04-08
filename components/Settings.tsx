import React from "react";
import { Box, NativeBaseProvider, Text, HStack, Select, Button, extendTheme, VStack, Divider } from "native-base";
import { SafeAreaView, View } from "react-native";
import styles from "../LearningAppStyles";
import { CountrySelection } from "./CountrySelection";
import { LanguageSelection } from "./LanguageSelection";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { theme } from "../extendTheme";



export const Settings: React.FC = () => {
    const state = useAppSelector(state => state);
    const countriesList = state.data.counriesList;    
    const languageList = state.data.languagesList;
    const userPreferences = state.userPreferences;
    const languageSelected = userPreferences.languageSelected;
    const countrySelected = userPreferences.countrySelected;

    const dispatch = useAppDispatch();

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <NativeBaseProvider theme={theme}>
                    <VStack space={4} divider={<Divider/>}>
                        <LanguageSelection dispatch={dispatch} languageSelected={languageSelected} languageList={languageList}/>
                        <CountrySelection dispatch={dispatch} countrySelected={countrySelected} countriesList={countriesList}/>
                    </VStack>
                </NativeBaseProvider>
            </View>
        </SafeAreaView>
    )
}