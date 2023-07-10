import { Pressable, View, Text, Image, ImageBackground } from "react-native"
import { CarDetailProps } from "../../navigation/ParameterList"
import style from "./CarCard-style";
import { Car } from "../../domain/Car";

type PropType = {
    car: Car,
    onPress: () => void
}

const CarCard = (props:PropType) => {

    const {car, onPress} = props;

    const carDetails = [
        { label: 'Make:', value: car.make },
        { label: 'Model:', value: car.model },
        { label: 'Year:', value: car.year }
      ];

    const carDetailText = (label:string, text: string) => {
        return <Text style={style.cardText}>{label}: {text}</Text> 
    }
    return (
        <Pressable style={style.cardParent} onPress={onPress}>
        <ImageBackground style={style.cardBg} source={require("../../../assets/car-bg.png")}>
            <View>
            {carDetails.map((detail, index) => (
                <Text key={index} style={style.cardText}>
                {detail.label} {detail.value}
                </Text>
            ))}
            </View>
        </ImageBackground>
        </Pressable>
        
    )
}

export default CarCard

