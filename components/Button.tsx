import { colors } from "@/constants/colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TextButton {
  label: string;
}

export function Button({ label }: TextButton) {
  return (
    <View>
      <TouchableOpacity style={styles.ButtonSign}>
        <Text style={styles.ButtonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  ButtonSign: {
    height: 50,
    backgroundColor: colors.purple700,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  ButtonText: {
    color: colors.white,
  },
});
