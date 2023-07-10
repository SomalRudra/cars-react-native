import React from "react"
import { Image, View, Text } from "react-native"
import style from "./EmptyPlaceHolder-style"

const EmptyPlaceholder = () => {
    return (
        <View style={style.parent}>
            <Image style={style.image} source={require("../../../assets/no-data.png")}/>
            <Text style={style.hintText}>Nothing for you now? Type in the search bar to load up something</Text>
            
        </View>
    )
}

export default EmptyPlaceholder;