import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/colors";
import { Sign } from "../screens/sign";

export default function Page() {
  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <Sign />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
});
