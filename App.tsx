import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenOptions } from './app/navigation/NavigationConstants';
import RoutePath from './app/navigation/RoutePath';
import CarList from './app/presentation/carlist/CarList';
import CarDetail from './app/presentation/cardetail/CarDetail';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={RoutePath.CarList} component={CarList} />
          <Stack.Screen name={RoutePath.CarDetail} component={CarDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
