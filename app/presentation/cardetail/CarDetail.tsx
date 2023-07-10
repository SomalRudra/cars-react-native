import React from "react";
import {View,Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { CarDetailProps } from "../../navigation/ParameterList";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { Car } from "../../domain/Car";
import styles from "./CarDetail-style";

const CarDetail = ({route,navigation}:CarDetailProps) => {
    const car : Car = useSelector(state => state.carReducer.car || {});
    const carData = {
        cityMpg: car?.cityMpg,
        class: car?.class,
        combinationMpg: car?.combinationMpg,
        cylinders: car?.cylinders,
        displacement: car?.displacement,
        drive: car?.drive,
        fuelType: car?.fuelType,
        highwayMpg: car?.highwayMpg,
        make: car?.make,
        model: car?.model,
        transmission: car?.transmission,
        year: car?.year
      };
      console.log(carData.cityMpg);
    return (
        <SafeAreaView>
            <Text style={styles.text}>
                {Object.entries(carData).map(([key, value]) => (
                    <React.Fragment key={key}>
                    <Text style={styles.property}>{key}: </Text>
                    <Text style={styles.value}>{value}</Text>
                    {"\n"}
                    </React.Fragment>
                ))}
            </Text>
        </SafeAreaView>
    )
}

export default CarDetail;