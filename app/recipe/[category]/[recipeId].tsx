// app/recipe/[category]/[recipeId].tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Meal } from '../../../types/MealTypes';
import { getMealDetails } from '../../../services/mealService';
import { theme } from '../../../theme';

export default function MealDetailsScreen() {
  const { recipeId } = useLocalSearchParams<{ recipeId: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    if (recipeId) {
      const fetchMealDetails = async () => {
        const data = await getMealDetails(recipeId);
        setMeal(data);
      };
      fetchMealDetails();
    }
  }, []);

  if (!meal) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Text style={styles.sectionTitle}>Instructions</Text>
      <Text style={styles.instructions}>{meal.strInstructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
     padding: 15,
      alignItems: 'center',
      backgroundColor:theme.colorGreen
    },
  image: { 
    width: '100%',
     height: 200, 
     borderRadius: 22,
    },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginVertical: 10, 
    textAlign: 'center',
      
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: '700', 
    marginTop: 20, 
    textAlign: 'left' ,
    marginBottom:10,
     
  },
  instructions: {
     fontSize: 20,
      marginTop: 10,
       lineHeight: 22, 
       textAlign: 'left',
        
      },
});
