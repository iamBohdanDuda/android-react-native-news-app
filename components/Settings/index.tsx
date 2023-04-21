import React from "react";
import { NativeBaseProvider, VStack, Divider } from "native-base";
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
                        <Selection dispatch={dispatch} selectionList={languagesList} valueSelected={languageSelected}
                                    onSelectHandler={selectLanguage}>News language</Selection>
                        <Selection dispatch={dispatch} selectionList={counriesList} valueSelected={countrySelected}
                                    onSelectHandler={selectCountry}>Country of origin of the news</Selection>
                    </VStack>
                </NativeBaseProvider>
            </View>
        </SafeAreaView>
    )
}