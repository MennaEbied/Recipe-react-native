import axios from 'axios';
import { Meal, MealCategory } from '../types/MealTypes';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getMealCategories = async (): Promise<MealCategory[]> => {
  const response = await axios.get(`${API_URL}/categories.php`);
  return response.data.categories;
};

export const getMealByCategory = async (category: string): Promise<Meal[]> => {
  const response = await axios.get(`${API_URL}/filter.php?c=${category}`);
  return response.data.meals;
};

// New function to get detailed information about a specific meal
export const getMealDetails = async (mealId: string): Promise<Meal> => {
    const response = await axios.get(`${API_URL}/lookup.php?i=${mealId}`);
    return response.data.meals[0];
  };