import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { theme } from "../theme";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Layout(){
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorBlack }}>
            <Tabs.Screen 
             name="index"
             options={{
                 title: "Home",
                 tabBarIcon:({size,color})=>(
                    <Entypo name="home" size={size} color={color} />
                 )
               }}
             />
            <Tabs.Screen 
             name="recipes" 
             options={{ 
                title: "Recipes",
                tabBarIcon:({size,color})=>(
                    <FontAwesome6 name="bowl-food" size={size} color={color} /> 
                )
               }}
             />
            <Tabs.Screen 
             name="favourite" 
             options={{ 
                title: "Favourite",
                tabBarIcon:({size,color})=>(
                    <MaterialIcons name="favorite" size={size} color={color} />
                )
               }}
             />
        </Tabs>
    )
}