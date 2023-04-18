import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaContainer: {
        display: "flex",
        flex: 1,
        backgroundColor: 'white'
    },

    container: {
        display: "flex",
        flex: 1,
    },

    button: {
        display: "flex",
        marginHorizontal: 50
    },

    firstSentence: {
        display: "flex",
        backgroundColor: "red"
    },
    secondSentence: {
        display: "flex",
        backgroundColor: "green"
    },
    thirdSentence: {
        display: "flex",
        backgroundColor: "blue"
    },



    newsCardPreviewImage: {
        borderRadius: 50,
    },
});

export default styles;