import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";

const spendingData = [
  { value: 420, color: "#8BA888" },
  { value: 310, color: "#D9A66C" },
  { value: 500, color: "#A995B8" },
  { value: 330, color: "#8FA9B8" },
];

export default function TransactionsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <View style={styles.chartContainer}>
        <PieChart
          data={spendingData}
          donut
          centerLabelComponent={() => (
            <View style={styles.centerLabel}>
              <Text style={styles.totalSpent}>$1,560</Text>
              <Text style={styles.spentLabel}>Spent</Text>
            </View>
          )}
        />
      </View>
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
  centerLabel: {
    alignItems: "center",
    justifyContent: "center",
  },

  totalSpent: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2F3A2F",
  },

  spentLabel: {
    fontSize: 13,
    color: "#7C8573",
    marginTop: 2,
  },
  chartContainer: {
    alignItems: "center",
    marginTop: 70,
  },
});
