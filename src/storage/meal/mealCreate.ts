import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../storageConfig';

export async function mealCreate(newMeal: any) {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals = storedMeals ? JSON.parse(storedMeals) : [];
    const storage = JSON.stringify([...meals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}