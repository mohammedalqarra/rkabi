import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { Button } from "native-base";
const { width, height } = Dimensions.get("window");
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{ ...StyleSheet.absoluteFill }}>
        <Image
          source={require("../assets/bg.jpg")}
          alt="Alternate Text"
          style={{}}
        />
      </View>
      <View style={styles.continer2}>
        <Button width={300} onPress={() => console.warn("hello world")}>
          Click Me
        </Button>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Button width={300} onPress={() => console.warn("hello world")}>
            Click Me 2
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  continer2: {
    height: height * 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
