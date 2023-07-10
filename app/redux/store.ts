import { createStore, combineReducers} from 'redux';
import { carSetterReducer } from './reducer/CarSetterReducer';
 
const rootReducer = combineReducers({
  carReducer: carSetterReducer,
});
 
export const store = createStore(rootReducer);