import { Stack,Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable } from 'react-native';

export default function Layout() {
  return (
     <Stack>
        <Stack.Screen
        name='index' 
        options={{
            headerShown:false,animation:"fade"
        }}/>
        <Stack.Screen
        name='categories/index' 
        options={{
            animation:"fade",
            title:"Categories",
            headerLeft:()=>(
              <Link href="/" asChild>
              <Pressable hitSlop={20} style={{ marginRight: 18 }}>
                <AntDesign name="back" size={24} color="black" style={{marginLeft:6}} />
              </Pressable>
              </Link>
             )   
        }}/>

        <Stack.Screen
        name='recipe/[category]' 
        options={{
           animation:"fade",
            title:"Recipes",
           headerLeft:()=>(
            <Link href="/categories" asChild>
            <Pressable hitSlop={20} style={{ marginRight: 18 }}>
              <AntDesign name="back" size={24} color="black" style={{marginLeft:6}} />
            </Pressable>
            </Link>
           )   
        }}/>
        <Stack.Screen
        name='recipe/[category]/[recipeId]' 
        options={{
           animation:"fade",
            title:"Instructions",
           headerLeft:()=>(
            <Link href="./" asChild>
            <Pressable hitSlop={20} style={{ marginRight: 18 }}>
              <AntDesign name="back" size={24} color="black" style={{marginLeft:6}} />
            </Pressable>
            </Link>
           )   
        }}/>
      </Stack>
  )
}
