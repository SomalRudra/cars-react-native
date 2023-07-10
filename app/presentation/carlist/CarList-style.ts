import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    searchBarParent: {
        margin: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        flexDirection: 'row'
    },
    searchBarTextBox: {
        flex: 0.8,
        margin: 5
    },
    searchBarIcon: {
        flex: 0.3,
        width: 20,
        heigt: 30
    }
})

export default style;
