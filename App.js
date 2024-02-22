import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Amount from "./components/Amount";
import { I18nProvider } from "@razorpay/i18nify-react";
import { BladeProvider, Button } from "@razorpay/blade/components";
import { bladeTheme } from "@razorpay/blade/tokens";

export default function App() {
  return (
    <I18nProvider>
      <BladeProvider themeTokens={bladeTheme} colorScheme="light">
        <View style={styles.container}>
          <Text>I18nify!</Text>
          <Amount value={20000000} />
          <Button onClick={() => console.log("hi")}>Hello</Button>
          <StatusBar style="auto" />
        </View>
      </BladeProvider>
    </I18nProvider>
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
