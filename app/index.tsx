import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';
import { LogoButton } from '../components/logoButton';
import { LogoImage } from '../components/logoImage';
import { theme } from '../theme';




export default function App() {

  const router = useRouter();
  const handlePress= ()=>{router.push("/categories")};

  return (
    <View style={styles.container}>
        <StatusBar style="light"/>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.tagline}>Let's cook delecious and healthy meals!</Text>
        <LogoImage/>
        <LogoButton title='Start Cooking' onPress={handlePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor:theme.colorOrange,
  
  },
  heading:{
    fontSize:42,
    fontWeight:"bold",
    textAlign:"center",
    color:theme.colorWhite,
    marginTop:42,

  },
  tagline:{
    fontSize:24,
    color:theme.colorWhite,
    paddingHorizontal:20,

  }
});