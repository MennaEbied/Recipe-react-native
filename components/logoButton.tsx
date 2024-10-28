import { theme } from "../theme";
import { StyleSheet, Text, Pressable ,Platform } from "react-native";
import * as Haptics from "expo-haptics";

type Props = {
  title: string;
  onPress: () => void;
};

export function LogoButton({ title, onPress }: Props) {

    const handlePress = ()=>{
        if(Platform.OS !=="web"){
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
            onPress();
        }
  return (
    <Pressable 
      onPress={handlePress} 
      style={({pressed})=>{
        if(pressed){
            return [styles.button,styles.buttonPressed];
        }
        return styles.button;
    }}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign:"center",
    color:theme.colorBright,
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 35,
    backgroundColor: theme.colorYellow,
    width:250,
    height:60,
    justifyContent:"center",
    alignItems:"center"
   
  },
  buttonPressed:{
    backgroundColor:theme.colorBrightYellow,
  }
});
