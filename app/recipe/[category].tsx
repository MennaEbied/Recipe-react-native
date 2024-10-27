// app/recipe/[category].tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Meal } from '../../types/MealTypes';
import { getMealByCategory } from '../../services/mealService';

export default function RecipeDetailsScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const [meals, setMeals] = useState<Meal[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (category) {
      const fetchMeals = async () => {
        const data = await getMealByCategory(category);
        setMeals(data);
      };
      fetchMeals();
    }
  }, [category]);

  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.idMeal}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.mealItem}
          onPress={() => router.push(`/recipe/${category}/${item.idMeal}`)}
        >
          <Image source={{ uri: item.strMealThumb }} style={styles.image} />
          <Text style={styles.mealText}>{item.strMeal}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  mealItem: { padding: 15, alignItems: 'center' },
  image: { width: 100, height: 100, borderRadius: 8 },
  mealText: { fontSize: 18, marginTop: 10 }
});
