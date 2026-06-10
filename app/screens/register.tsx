import { HeaderTitle } from "@react-navigation/elements";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../constants/colors";

export function Register() {
  return (
    <View style={styles.container}>
      <HeaderTitle style={styles.Title}>Cadastrar</HeaderTitle>
      <View style={styles.columnOne}>
        <TextInput placeholder="Email" style={styles.Input} />
        <TextInput placeholder="Senha" style={styles.Input} />
        <TextInput placeholder="Confirmar Senha" style={styles.Input} />
        <Button title="Enviar" />

      </View>

      <View>
        <Text style={styles.bottomText}>Já tem uma conta? Login</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },

  Title: {
    textAlign: "center",
    fontSize: 24,
  },

  TextForgot: {
    marginTop: 10,
    color: colors.gray500,
  },

  bottomText: {
    textAlign: "center",
    color: colors.gray500,
  },

  Input: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 10,
    lineHeight: 1,
    borderColor: colors.black,
  },

  columnOne: {
    justifyContent: "center",
    flex: 1,
  },
});
