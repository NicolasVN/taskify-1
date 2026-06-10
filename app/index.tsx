import { StyleSheet, View } from "react-native";
import { Sign } from "./screens/sign";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./constants/colors";
import { Register } from "./screens/register";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
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
