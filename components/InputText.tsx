import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface InputTextProps {
  label?: string;
  placeholder: string;
  icon?: keyof typeof Ionicons.glyphMap;
  isPassword?: boolean;
}

export function InputText({
  label,
  placeholder,
  icon,
  isPassword,
}: InputTextProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View>
      {label && <Text style={styles.LabelInput}>{label}</Text>}

      <View style={styles.InputContainer}>
        {icon && <Ionicons name={icon} size={20} color={colors.gray500} />}

        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.gray400}
          style={styles.Input}
          secureTextEntry={isPassword && !showPassword}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={20}
              color={colors.gray500}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray300,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  Input: {
    flex: 1,
    marginLeft: 10,
    color: colors.black,
  },

  LabelInput: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
