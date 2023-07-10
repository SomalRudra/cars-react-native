import { StyleSheet } from "react-native"
import { normalizeHeight } from "../../global/SizeConfig";

const style = StyleSheet.create({
    headerContainer: {
        display: "flex",
        justifyContent:'center',
        alignItems: 'center',
        margin: 10,
    },
    titleText: {
        fontSize: normalizeHeight(25)
    }
})

export default style;