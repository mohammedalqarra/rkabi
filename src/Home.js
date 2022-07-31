import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState, useEffect } from "react";
const { width, height } = Dimensions.get("window");
const Home = () => {
  const marginTop = useState(new Animated.Value(0))[0];
  const changeHeight = () => {
    Animated.timing(marginTop, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    changeHeight();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          marginTop,
        }}
      >
        <Image
          source={require("../assets/bg.jpg")}
          style={{
            height: 500,
            width: width,
          }}
        />
      </Animated.View>
      <TouchableOpacity>
        <Text>click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
