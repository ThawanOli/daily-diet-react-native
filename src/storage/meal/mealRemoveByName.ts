import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../storageConfig';
import { mealsGetAll } from './mealsGetAll';

export async function mealRemoveByName(mealName: string) {
  try {
    const storage = await mealsGetAll();
    const filtered = storage.filter(meal => meal.name !== mealName);
    const meals = JSON.stringify(filtered);

    await AsyncStorage.setItem(MEAL_COLLECTION, meals);
  } catch (error) {
    throw error;
  }
}