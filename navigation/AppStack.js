import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloCabin4 from '../screens/HelloCabin4';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HelloCabin4" component={HelloCabin4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
