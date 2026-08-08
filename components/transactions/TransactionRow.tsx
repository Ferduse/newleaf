import { StyleSheet, Text, View } from "react-native";

type TransactionRowProps = {
  name: string;
  merchant: string;
  category: string;
  amount: number;
};

export default function TransactionRow({
  name,
  category,
  merchant,
  amount,
}: TransactionRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.leftSection}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>🌿</Text>
        </View>

        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.merchant}>{merchant}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.amount}>-${amount.toFixed(2)}</Text>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#FFF7DD",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#F0E6C9",

    paddingHorizontal: 14,
    paddingVertical: 12,

    marginBottom: 10,
  },

  details: {
    fontSize: 13,
    color: "#7C8573",
    marginTop: 4,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  icon: {
    fontSize: 28,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2F3A2F",
  },

  merchant: {
    fontSize: 13,
    color: "#7C8573",
    marginTop: 3,
  },

  rightSection: {
    alignItems: "flex-end",
  },

  amount: {
    fontSize: 16,
    fontWeight: "700",
    color: "#D96C6C",
    marginBottom: 6,
  },

  categoryBadge: {
    backgroundColor: "#F1D7E6",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  categoryText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#554A55",
  },
});
