import { Text, View, StyleSheet } from "react-native";

export default function FavScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favourite</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});