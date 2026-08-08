import { ScrollView, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";
import TransactionList from "../../components/transactions/TransactionList";
import Card from "../../components/ui/Card";

const spendingData = [
  { value: 420, color: "#8BA888" },
  { value: 310, color: "#D9A66C" },
  { value: 500, color: "#A995B8" },
  { value: 330, color: "#8FA9B8" },
];

export default function TransactionsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>All Transactions</Text>
        <Card>
          <Text style={styles.chartTitle}>Spending Breakdown</Text>
          <View style={styles.chartContainer}>
            <PieChart
              data={spendingData}
              donut
              radius={105}
              innerRadius={58}
              centerLabelComponent={() => (
                <View style={styles.centerLabel}>
                  <Text style={styles.totalSpent}>$1,560</Text>
                  <Text style={styles.spentLabel}>Spent</Text>
                </View>
              )}
            />
          </View>
        </Card>
        <TransactionList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1bfbb",
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 140,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
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
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2F3A2F",
    marginBottom: 20,
  },
});
