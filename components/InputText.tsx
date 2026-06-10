import { colors } from "@/constants/colors";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputTextProps {
  label: string;
  placeholder: string;
}

export function InputText({ label, placeholder }: InputTextProps) {
  return (
    <View>
      <Text style={styles.labelInput}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.Input} />
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingHorizontal: 10,
    lineHeight: 1,
    borderColor: colors.black,
    color: colors.black
  },
  labelInput: {
    fontWeight: "bold"
  }
});
