import React, { useEffect, useState } from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MealCategory } from '../../types/MealTypes'; 
import { getMealCategories } from '../../services/mealService'; 
import { useRouter } from 'expo-router';
import { theme } from '../../theme';


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
     style={styles.list}
      data={categories}
      keyExtractor={(item) => item.idCategory}
      numColumns={2} // Display two items per row
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
  categoryItem: {
    padding: 15,
    borderBottomWidth: 1, 
    borderBottomColor: theme.colorBright,
    flex: 1,
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    
    },
  categoryText: {
     fontSize: 20,
     fontWeight:"bold",
     color:theme.colorBright
    
     
   },
   list:{
    paddingHorizontal: 10,
    paddingTop:15,
    backgroundColor:theme.colorOrange,
    
   },
   
});
