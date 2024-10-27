import React, { useEffect, useState } from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MealCategory } from '../../types/MealTypes'; 
import { getMealCategories } from '../../services/mealService'; 
import { useRouter } from 'expo-router';

export default function CategoriesScreen() {
  const [categories, setCategories] = useState<MealCategory[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getMealCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.idCategory}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => router.push(`/recipe/${item.strCategory}`)}
        >
          <Text style={styles.categoryText}>{item.strCategory}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  categoryItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  categoryText: { fontSize: 18 }
});
