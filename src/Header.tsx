import React from "react";
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";


export function Header() {
  const isDarkMode = useColorScheme() === "dark";
  return (
    
      <View style={styles.content}>
        <Text style={styles.title}>Solana</Text>
        <Text style={styles.subtitle}>Expo React Native Example</Text>
      </View>

  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  subtitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
  },
});
