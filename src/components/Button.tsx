import { colors } from "@/constants/colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TextButton {
  label: string;
  onPress: () => void;
}

export function Button({ label, onPress }: TextButton) {
  return (
    <View>
      <TouchableOpacity style={styles.ButtonSign} onPress={onPress}>
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
