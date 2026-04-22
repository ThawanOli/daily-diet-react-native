import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/Home';
import { NewMeal } from '../screen/NewMeal';
import { Feedback } from '../screen/Feedback';
import { Details } from '../screen/Details';
import { Statistics } from '../screen/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="newmeal" component={NewMeal} />
        <Screen name="feedback" component={Feedback} />
        <Screen name="details" component={Details} />
        <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
}