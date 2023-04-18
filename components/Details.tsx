import React from "react";
import { 
    SafeAreaView,
    ScrollView,
    View
} from "react-native";
import styles from "../AppStyles";
import { NativeBaseProvider, Text, Button, Box, Image } from "native-base";
import { launchImageLibrary, launchCamera, MediaType } from "react-native-image-picker";
import { PermissionsAndroid } from "react-native";

/*export const Details: React.FC = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <NativeBaseProvider>
                    <Box px="4" pt="4">
                        <Text>{route.params.text}</Text>
                    </Box>
                    <Box px="4" pt="4">
                        <Button onPress={() => navigation.goBack()}>Back</Button>
                    </Box>
                </NativeBaseProvider>
            </View>
        </SafeAreaView>
    )
}*/

interface Props {
    navigation? : any,
    route? : any
}

interface State {
    photo? : any,
    uri? : any
}

export class Details extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            photo: null,
            uri: null
        }
    }

    handlePickPhoto = () => {
        const options = {
            noData: true
        }

        launchImageLibrary(options, (response) => {
            if (response.uri) {
                this.setState({ photo: response })
            }
        })
    }

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
                title: "App requires camera",
                message: "App requires camera",
                buttonNeutral: "Ask me later",
                buttonPositive: "allow",
                buttonNegative: "Do not allow"
            })
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.handleTakePhoto();
            }
            else {
                console.log("Denied by user");
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleTakePhoto = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            saveToPhotos: true
        }

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log(response);
            }
            else if (response.errorCode) {
                console.log('error' + response.errorMessage);
            }
            else {
                this.setState({uri: response.assets[0].uri});
                console.log('uri ' + response.assets[0].uri);
                
            }
        })
    }

    render(): React.ReactNode {
        const {photo, uri} = this.state;
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <ScrollView>
                    <View style={styles.container}>
                        <NativeBaseProvider>
                            <Box px="4" pt="4">
                                <Text>{this.props.route.params.text}</Text>
                            </Box>
                            <Box px="4" pt="4">
                                <Button onPress={() => this.props.navigation.goBack()}>Back</Button>
                            </Box>
                            <Box>
                                {uri && (<Image source={{uri: uri}} alt="alt" size="2xl"/>)}
                                <Button onPress={this.handlePickPhoto}>Choose photo</Button>
                                <Button onPress={this.requestCameraPermission}>Take photo</Button>
                            </Box>
                        </NativeBaseProvider>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}