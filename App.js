import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Amount from "./components/Amount";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I18nify!</Text>
      <Amount value={20000000} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
