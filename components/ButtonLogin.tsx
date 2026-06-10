import { colors } from "@/constants/colors";
import { Slot } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TextButton {
  label: string;
}

export function ButtonLogin({ label }: TextButton) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.ButtonSign}>
        <Text style={styles.ButtonText}>{label}</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
    Container: {
        flex:1
    },
  ButtonSign: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:1,
    borderColor: colors.gray300
  },

  ButtonText: {
    color: colors.black,
        fontWeight: "bold"

  },
});
