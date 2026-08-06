import DebtGardenCard from "@/components/home/DebtGardenCard";
import Header from "@/components/home/Header";
import OverviewCard from "@/components/home/OverviewCard";
import { SafeAreaView } from "react-native-safe-area-context";
import TransactionCard from "../../components/home/TransactionCard";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />
      <OverviewCard />
      <DebtGardenCard />
      <TransactionCard />
    </SafeAreaView>
  );
}
