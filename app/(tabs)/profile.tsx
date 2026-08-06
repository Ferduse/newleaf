import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F1",
    paddingHorizontal: 24,
    paddingTop: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#2F3A2F",
  },
});
