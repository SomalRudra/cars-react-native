import { StyleSheet } from "react-native";
import { normalizeHeight } from "../../global/SizeConfig";

const styles = StyleSheet.create({
    text: {
        fontSize: normalizeHeight(20)
    },

    property: {
        fontSize: normalizeHeight(18),
        color: 'grey'
    },

    value: {
        fontSize: normalizeHeight(20),
        color: 'black'
    }
})

export default styles;