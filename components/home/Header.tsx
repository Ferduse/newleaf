import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.appName}>New Leaf </Text>
      <Text style={styles.greeting}> Hi Sabina </Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  appName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6B8E5E",
    marginBottom: 8,
  },
  greeting: {
    fontSize: 38,
    fontWeight: "700",
    color: "#2F3A2F",
    marginBottom: 15,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
