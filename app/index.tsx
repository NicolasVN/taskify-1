import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/colors";
import { Sign } from "../screens/sign";
import { Register } from "@/screens/register";

export default function Page() {
  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <Register />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
});
