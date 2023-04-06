import React from "react";
import { Box, NativeBaseProvider, Text, HStack, Select } from "native-base";
import { SafeAreaView, View } from "react-native";
import styles from "../LearningAppStyles";
import { CountrySelection } from "./CountrySelection";
import { LanguageSelection } from "./LanguageSelection";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const Settings: React.FC = () => {
    const state = useAppSelector(state => state);
    const userPreferences = state.userPreferences;
    const languageSelected = userPreferences.languageSelected;
    const countrySelected = userPreferences.countrySelected;

    const dispatch = useAppDispatch();

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <NativeBaseProvider>
                    <Box pt="4" px="4">
                        <Text>Your profile</Text>                    
                    </Box>
                    <LanguageSelection dispatch={dispatch} languageSelected={languageSelected}/>
                    <CountrySelection dispatch={dispatch} countrySelected={countrySelected}/>
                </NativeBaseProvider>
            </View>
        </SafeAreaView>
    )
}