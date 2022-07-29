import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Asset } from "expo-asset";
import React, { useState, useEffect } from "react";
// start of adding screens
import Home from "./src/Screens/Home";
// start of image cashing
// function cacheImages(images) {
//   return images.map((image) => {
//     if (typeof image === "string") {
//       return Image.prefetch(image);
//     } else {
//       return Asset.fromModule(image).downloadAsync();
//     }
//   });
// }
// end of image caching

export default function App() {
  // start for cashing the application
  // const [appIsReady, setAppIsReady] = useState(false);
  // useEffect(() => {
  //   async function loadResourcesAndDataAsync() {
  //     try {
  //       SplashScreen.preventAutoHideAsync();

  //       const imageAssets = cacheImages([require("./assets/testbg.jpg")]);

  //       const fontAssets = cacheFonts([FontAwesome.font]);

  //       await Promise.all([...imageAssets]);
  //     } catch (e) {
  //       // You might want to provide this error information to an error reporting service
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //       SplashScreen.hideAsync();
  //     }
  //   }

  //   loadResourcesAndDataAsync();
  // }, []);

  // if (!appIsReady) {
  //   return null;
  // }

  // end for cashing the application

  return (
    <NativeBaseProvider>
      <View>
        <Home />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
