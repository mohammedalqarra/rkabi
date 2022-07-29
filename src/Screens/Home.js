import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { Button } from "native-base";
const { width, height } = Dimensions.get("window");
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{ ...StyleSheet.absoluteFill }}>
        <Image
          source={require("../../assets/testbg.jpg")}
          style={{
            flex: 1,
            height: null,
            width: null,
          }}
        />
      </View>
      <View style={styles.secContainer}>
        <Button
          backgroundColor={"white"}
          onPress={() => console.warn("hello world")}
        >
          Sign In
        </Button>
        <Button
          backgroundColor={"blue"}
          marginTop={5}
          onPress={() => console.warn("hello world")}
        >
          Sign Out
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end",
  },
  secContainer: {
    height: height / 3,
    backgroundColor: "white", //? remove this after going on
  },
});
