import { StyleSheet, Text, View } from "react-native";
import Card from "../ui/Card";

export default function TransactionCard() {
  return (
    <Card>
      <View style={styles.headerRow}>
        <Text style={styles.cardTitle}>Recent Transactions</Text>
        <Text style={styles.viewAll}> View All</Text>
      </View>
      <View style={styles.transactionRow}>
        <View>
          <Text style={styles.transactionName}>Trader Joe's</Text>
          <Text style={styles.category}>Groceries</Text>
        </View>

        <Text style={styles.amount}>-$42.18</Text>
      </View>

      <View style={styles.transactionRow}>
        <View>
          <Text style={styles.transactionName}>Qawah House</Text>
          <Text style={styles.category}>Food & Drinks</Text>
        </View>

        <Text style={styles.amount}>-$12.83</Text>
      </View>

      <View style={styles.transactionRow}>
        <View>
          <Text style={styles.transactionName}>Tokyo Ya</Text>
          <Text style={styles.category}>Food & Drinks</Text>
        </View>

        <Text style={styles.amount}>-$86.34</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  transactionName: {
    fontSize: 16,
    fontWeight: "600",
  },

  category: {
    fontSize: 13,
    color: "#7C8573",
    marginTop: 4,
  },

  amount: {
    fontSize: 15,
    fontWeight: "600",
    color: "#D96C6C",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 15,
  },

  viewAll: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
  },
});
