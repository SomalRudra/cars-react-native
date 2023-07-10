import React from "react";
import { useState, useCallback, useEffect } from "react";
import {View, FlatList, Image, TextInput, ActivityIndicator} from 'react-native';
import { CarListProps } from "../../navigation/ParameterList";
import { SafeAreaView } from "react-native-safe-area-context";
import { Car } from "../../domain/Car";
import CustomHeader from "../global/Header";
import RoutePath from "../../navigation/RoutePath";
import { fetchCars } from "../../data/request";
import debounce  from 'lodash.debounce';
import CarCard from "../global/CarCard";
import { ImagePath } from "../../global/imgsource";
import style from "./CarList-style";
import EmptyPlaceholder from "../global/EmptyPlaceholder";
import { useDispatch } from "react-redux";
import { setCar } from "../../redux/action/CarAction";

type HeaderPropType = {
    title: string
}

const CarList = ({route, navigation} : CarListProps) => {
    const dispatch = useDispatch();
    const [cars, setCars] = useState<Car[]>();
    const [modelName, setModelName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const carText = 'This is car list';
    const headerTitle = "Find Your Car";

    const goToDetail = (car: Car) => {
       dispatch(setCar(car))
        navigation.navigate(RoutePath.CarDetail, {car})
    };
    const fetchData = useCallback(
      debounce(async () => {
        console.log('debounce: calling fetch data');
        try {
          const carsData = await fetchCars(modelName.toLowerCase());
          setCars(carsData);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      }, 3000),
      [modelName]
    );

    
     
      const handleModelnameSubmission = (event) => {
        const text = event.nativeEvent.text;
        setModelName(text);
        if(text){
          setIsLoading(true);
          fetchData();
        }else{
          setCars([])
          setIsLoading(false);
        }
      }

    const renderCarItem = ({ item }: { item: Car }) => (
        <CarCard car={item} onPress={()=>goToDetail(item)} />
      );

    const listOrLoading = isLoading ? (<ActivityIndicator />) : (
      modelName ? 
      <FlatList
            data={cars}
            renderItem={renderCarItem}
            keyExtractor={(item:Car, index:number) => index.toString()}
        /> : 
        <EmptyPlaceholder />
    )    
    
    return (
        <SafeAreaView>
            <CustomHeader title={headerTitle}/>
            <View style={style.searchBarParent}>
              <TextInput
                value={modelName}
                onChange={handleModelnameSubmission}
                placeholder="Enter car model name"
                style={style.searchBarTextBox}
             />
             {/* <Image style={style.searchBarIcon} source={require( "../../../assets/search-icon.png")}/> */}
            </View>
            
            {listOrLoading}
        </SafeAreaView>
    )
}

export default CarList;