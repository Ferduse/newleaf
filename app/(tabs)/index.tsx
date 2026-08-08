import DebtGardenCard from "@/components/home/DebtGardenCard";
import Header from "@/components/home/Header";
import OverviewCard from "@/components/home/OverviewCard";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TransactionCard from "../../components/home/TransactionCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />
        <OverviewCard />
        <DebtGardenCard />
        <TransactionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b9b8b6",
  },
  scrollContent: {
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
});
