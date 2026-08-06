import { StyleSheet, Text, View } from "react-native";
import Card from "../ui/Card";

export default function OverviewCard() {
  return (
    <Card>
      <Text style={styles.cardTitle}> Overview </Text>

      <View style={styles.cardSpace}>
        <View>
          <Text style={styles.label}> Income </Text>
          <Text style={[styles.amount, styles.incomeAmount]}> $2,000 </Text>
        </View>

        <View style={styles.verticalDivider} />

        <View>
          <Text style={styles.label}> Spent </Text>
          <Text style={[styles.amount, styles.spentAmount]}> $1,560 </Text>
        </View>

        <View style={styles.verticalDivider} />

        <View>
          <Text style={styles.label}> Remaining </Text>
          <Text style={[styles.amount, styles.remainingAmount]}> $440 </Text>
        </View>
      </View>

      <View style={styles.horizontalDivider} />

      <View style={styles.progressHeader}>
        <Text style={styles.progressLabel}> Budget</Text>
        <Text style={styles.progressPercent}>63% of budget used</Text>
      </View>

      <View style={styles.progressTrack}>
        <View style={styles.progressFill} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  cardSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  verticalDivider: {
    width: 2,
    height: 40,
    backgroundColor: "#E7E3DA",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#7C8573",
    marginBottom: 10,
  },
  amount: {
    fontSize: 22,
    fontWeight: "700",
  },
  incomeAmount: {
    color: "#6B8E5E",
  },

  spentAmount: {
    color: "#D96C6C",
  },

  remainingAmount: {
    color: "#2F3A2F",
  },
  horizontalDivider: {
    height: 2,
    backgroundColor: "#E7E3DA",
    marginVertical: 13,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2F3A2F",
  },

  progressPercent: {
    fontSize: 13,
    color: "#7C8573",
  },
  progressTrack: {
    height: 10,
    backgroundColor: "#E8E5DD",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
  },

  progressFill: {
    width: "63%",
    height: "100%",
    backgroundColor: "#6B8E5E",
    borderRadius: 10,
  },
});
