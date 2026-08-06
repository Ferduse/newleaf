import { StyleSheet, Text } from "react-native";
import Card from "../ui/Card";

export default function OverviewCard() {
  return (
    <Card>
      <Text style={styles.cardTitle}> Overview </Text>

      <Text> Income </Text>

      <Text> Spent </Text>

      <Text> Left </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 25,
  },
});
