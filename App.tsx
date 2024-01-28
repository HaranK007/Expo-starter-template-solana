// Polyfills
import "react-native-get-random-values";
import { Buffer } from "buffer";
global.Buffer = Buffer;

import { StyleSheet,ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CLUSTER, ConnectionProvider } from "./src/ConnectionProvider";
import { clusterApiUrl } from "@solana/web3.js";
import { AuthorizationProvider } from "./src/AuthorizationProvider";
import MainScreen from "./src/MainScreen";
import { Header } from "./src/Header";
import { Colors } from "./src/Colors";

export const APP_IDENTITY = {
  name: "Expo Starter Template",
};

export default function App() {
  return (
    <ConnectionProvider
      config={{ commitment: "processed" }}
      endpoint={clusterApiUrl(CLUSTER)}
    >
      <AuthorizationProvider>
      <ImageBackground
      accessibilityRole="image"
      testID="new-app-screen-header"
      source={require("./assets/background.png")}
      style={[
        styles.background,
        {
          backgroundColor: Colors.darker,
        },
      ]}
      imageStyle={styles.logo}
    >
        <SafeAreaView style={styles.shell}>
          <Header />
          <MainScreen />
        </SafeAreaView>
      </ImageBackground>
      </AuthorizationProvider>
    </ConnectionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  shell: {
    height: "100%",
  },
  background: {
    paddingBottom: 40,
    paddingTop: 60,
    paddingHorizontal: 32,
  },
  logo: {
    overflow: "visible",
    resizeMode: "cover",
  }
});
