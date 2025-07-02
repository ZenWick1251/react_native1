import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type SearchProps = {
  goBack: () => void;
};

export default function Search({ goBack }: SearchProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={goBack}
          testID="back-button"
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Text style={styles.backText}>Back</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Content</Text>

        <Pressable style={styles.filterButton}>
          <Text style={styles.filterText}>Filter</Text>
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.resultText}>Search result</Text>
        <Text style={styles.resultText}>Search result</Text>
        <Text style={styles.resultText}>Search result</Text>
        <Text style={styles.resultText}>Search result</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  header: {
    width: 343,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 32,
  },
  backButton: {
    width: 38,
    height: 19,
  },
  backText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    color: "#5DB075",
    textAlign: "left",
  },
  headerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 30,
    color: "black",
  },
  filterButton: {
    width: 38,
    height: 19,
  },
  filterText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    color: "#5DB075",
    textAlign: "right",
  },
  searchContainer: {
    width: 343,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  searchInput: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    color: "black",
  },
  content: {
    flex: 1,
  },
  resultText: {
    fontSize: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
});
