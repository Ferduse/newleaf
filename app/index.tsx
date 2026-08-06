import Header from "@/components/home/Header";
import OverviewCard from "@/components/home/OverviewCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />
      <OverviewCard />
    </SafeAreaView>
  );
}
