// app/recipe/[category].tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image ,Dimensions} from 'react-native';
import { useLocalSearchParams, useRouter,Link } from 'expo-router';
import { Meal } from '../../types/MealTypes';
import { getMealByCategory } from '../../services/mealService';
import { theme } from '../../theme';

const screenWidth = Dimensions.get('window').width;

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
  }, []);

  return (
    <FlatList style={styles.list}
      data={meals}
      numColumns={2} // Set number of columns to 2
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
  mealItem: {
    margin: 10, 
     flex:1,
     overflow: 'hidden',
    alignItems:"center",
    borderRadius:10,
    },
  image: {
     width: screenWidth/2-30,
     height: 150,
     borderRadius:25, 
    },
  mealText: {
     fontSize: 18,
      padding:8,
      textAlign:"center",
      color:theme.colorBlack,
      fontWeight:"bold",
      fontStyle:"italic",
     },
     list:{
      paddingTop:12,
      backgroundColor:theme.colorGreen,
      paddingHorizontal:12,
     }
});
