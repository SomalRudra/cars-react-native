import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import RoutePath from './RoutePath';
import { Car } from '../domain/Car';

type RootStackParamList = {
  CarList: { };
  CarDetail: {
    car:Car
  };
};

type CarListProps = NativeStackScreenProps<RootStackParamList, RoutePath.CarList>;
type CarDetailProps = NativeStackScreenProps<RootStackParamList, RoutePath.CarDetail>;


export {
    CarListProps,
    CarDetailProps
}