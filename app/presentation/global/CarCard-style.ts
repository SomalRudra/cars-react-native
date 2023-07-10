import { StyleSheet } from "react-native";
import { normalizeHeight } from "../../global/SizeConfig";

const style = StyleSheet.create({
    cardParent: {
        borderWidth: 2,
        borderColor: "grey",
        margin: 5,
        borderRadius: 10,
        display: "flex",
        flexDirection: 'row',
        flex: 1,
        height: '30%'
    },  
    cardTextParent: {
        padding: 20
    },
    cardText: {
        textAlign: 'left',
        color: 'white',
        fontSize: normalizeHeight(14),
    },
    cardBg: {
        width: "100%",
        height: "100%"
    }
})

export default style;