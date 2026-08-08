import { BlurView } from "expo-blur";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <View style={styles.card}>
      <BlurView intensity={30} tint="light" style={styles.blur}>
        {children}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    overflow: "hidden",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    margin: 10,
    marginBottom: 16,
  },

  blur: {
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.28)",
  },
});
