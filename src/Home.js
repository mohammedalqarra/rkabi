import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/bg.jpg")}
          style={{
            height: height / 1.2,
            width: width,
          }}
        />
      </View>
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
