import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Search from "./search";

export default function Index() {
  const [showSearch, setShowSearch] = useState(false);

  if (showSearch) {
    return <Search goBack={() => setShowSearch(false)} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <Text style={styles.stars}>★ ★ ★ ★ ★</Text>
        <Text style={styles.title}>Rate our app</Text>
        <Text style={styles.description}>
          Consequat velit qui adipisicing sunt do reprehenderit ad laborum
          tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate
          duis sit esse aliqua esse ex dolore esse. Consequat velit qui
          adipisicing sunt.
        </Text>
        <Pressable style={styles.button} onPress={() => setShowSearch(true)}>
          <Text style={styles.buttonText}>I love it!</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.feedback}>Don't like the app? Let us know.</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5DB075",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bg: {
    width: 343,
    height: 427,
    borderRadius: 8,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  stars: {
    width: 192,
    height: 32,
    textAlign: "center",
    color: "#FFB84E",
    marginTop: 32,
    marginBottom: 16,
    fontSize: 28,
  },
  title: {
    width: 184,
    height: 36,
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 36,
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    color: "#666666",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    textAlign: "center",
    marginBottom: 45,
  },
  button: {
    width: 311,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#5DB075",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
    color: "#FFFFFF",
  },
  feedback: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
    textAlign: "center",
    color: "#5DB075",
  },
});
