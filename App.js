import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
// start importing paths
import Home from "./src/Home";
export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
