import { StyleSheet, Text, View } from "react-native";
import Card from "../ui/Card";

export default function DebtGardenCard() {
  return (
    <Card>
      <View style={styles.gardenRow}>
        <View>
          <Text style={styles.cardTitle}>Debt Garden</Text>
          <Text style={styles.debtLabel}> Total Debt</Text>
          <Text style={styles.debtAmount}> $3,000 </Text>
          <Text style={styles.paidAmount}>$500 paid off</Text>
        </View>
        <Text style={styles.plant}>🌱</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  debtLabel: {
    fontSize: 14,
    color: "#7C8573",
    marginBottom: 6,
  },

  debtAmount: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2F3A2F",
  },

  paidAmount: {
    fontSize: 14,
    color: "#6B8E5E",
    fontWeight: "600",
    marginTop: 8,
  },
  gardenRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  plant: {
    fontSize: 70,
  },
});
