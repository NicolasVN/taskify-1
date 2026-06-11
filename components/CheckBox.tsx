import { colors } from "@/constants/colors";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface TextCheckBox {
  label: string;
}

export function Checkbox({ label }: TextCheckBox) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.Container}>
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      style={styles.ColumnOne}
    >
      <View style={styles.Checkbox}>
        {checked && <Text>✓</Text>}
      </View>

      <Text style={styles.TextCheck}>{label}</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    Container: {
flex:1
    },
  ColumnOne: {
    flexDirection: "row",
    alignItems: "center",
  },

  Checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  TextCheck: {
    color: colors.gray500
  }
});