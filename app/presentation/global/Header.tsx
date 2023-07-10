import { View, Text } from "react-native"
import style from "./Header-style";

type Prop = {
    title: string
}

const CustomHeader = (prop: Prop) => {
    return (
        <View style={style.headerContainer}>
            <Text style={style.titleText}>{prop.title}</Text>
        </View>
    )
}

export default CustomHeader;