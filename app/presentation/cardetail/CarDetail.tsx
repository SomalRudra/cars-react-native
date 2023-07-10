import React from "react";
import {View,Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { CarDetailProps } from "../../navigation/ParameterList";

const CarDetail = ({route,navigation}:CarDetailProps) => {
    const {car} = route.params;
    return (
        <SafeAreaView>
            <Text>This is car detail</Text>
        </SafeAreaView>
    )
}

export default CarDetail;