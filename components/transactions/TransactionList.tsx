import { Pressable, StyleSheet, Text, View } from "react-native";
import TransactionRow from "./TransactionRow";

const transactions = [
  {
    id: 1,
    name: "AYCE Sushi",
    category: "Eating Out",
    merchant: "Checking",
    amount: 96,
  },
  {
    id: 2,
    name: "Matcha Latte",
    category: "Food & Drinks",
    merchant: "Qawah House",
    amount: 12.83,
  },
  {
    id: 3,
    name: "Chips, chocolate chip brookies",
    category: "Groceries",
    merchant: "Trader Joe's",
    amount: 42.18,
  },
];

export default function TransactionList() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>All Transactions</Text>

        <Pressable style={styles.addButton}>
          <Text style={styles.addText}>+ Add Transaction</Text>
        </Pressable>
      </View>

      {transactions.map((transaction) => (
        <TransactionRow
          key={transaction.id}
          name={transaction.name}
          category={transaction.category}
          merchant={transaction.merchant}
          amount={transaction.amount}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,

    borderBottomWidth: 1,
    borderBottomColor: "#E8E3D8",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  addButton: {
    backgroundColor: "#7F6FA8",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  addText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
