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
    fontSize: 18,
    fontWeight: "600",
    color: "#6B8E5E",
  },
  greeting: {
    fontSize: 32,
    fontWeight: "700",
    color: "#2F3A2F",
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
