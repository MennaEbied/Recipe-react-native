import { StyleSheet, Text, View  } from 'react-native';
import { LogoImage } from '../components/logoImage';
import { theme } from '../theme';




export default function App() {
  return (
    <View style={styles.container}>
     <LogoImage/>
     <Text style={styles.text}>Foody</Text>
     <Text style={{fontSize:30,color:theme.colorWhite}}>Food is always right</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:theme.colorOrange,
  },
  text:{
    fontSize:35,
    fontWeight:"bold",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    color:theme.colorWhite,

  },
  backGround:{
    flex:1,
  }
});