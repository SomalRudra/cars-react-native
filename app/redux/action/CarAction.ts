import { Car } from "../../domain/Car";
import Action from "../constants";

export const setCar= (car: Car) => {
        return {
          type: Action.SET_CAR,
          payload: car
        };
}