import { HeaderTitle } from "@react-navigation/elements";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export function Sign() {
  return (
    <View style={styles.container}>
      <HeaderTitle style={styles.Title}>Entrar</HeaderTitle>
      <View style={styles.columnOne}>
        <TextInput placeholder="Email" style={styles.Input} />
        <TextInput placeholder="Senha" style={styles.Input} />

        <Button title="Enviar" />

        <Text style={styles.TextForgot}>Esqueceu a senha?</Text>
      </View>

      <View>
        <Text style={styles.bottomText}>Não tem uma conta? Cadastre-se</Text>
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
  },

  bottomText: {
    textAlign: "center",
  },

  Input: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  columnOne: {justifyContent: "center", flex: 1},
});
