import React from "react";
import { HomeScreen } from "./components/HomeScreen";
import { Details } from "./components/Details";
import { Settings } from "./components/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux'
import { store } from "./store";
import { NewsDetails } from "./components/NewsDetails";
import Ionicons from "react-native-vector-icons/Ionicons"


const Tabs = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline'
                }
                else if (route.name === 'Settings') {
                    iconName = focused ? 'cog' : 'cog-outline';
                }

                return <Ionicons name={iconName} size={size} color={color}></Ionicons>
            },
            headerTitleAlign: "center"
        })}>
            <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
        </Tab.Navigator>
    )
}

export const App = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerTitleStyle: { fontWeight: "bold"}}}>
                    <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
                    <Stack.Screen name="NewsDetails" component={NewsDetails} options={{title: "Details"}}/>
                    <Stack.Screen name="Details" component={Details}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}














/*<View style={styles.container}>
                    <Text onPress={() => setOwnStyle(!ownStyle)} style={ownStyle ? styles.firstSentence : styles.secondSentence}>First sentence js</Text>
                    <Text style={styles.secondSentence}>Second sentence js</Text>
                    <Text style={styles.thirdSentence}>Third sentence js</Text>
    </View>*/