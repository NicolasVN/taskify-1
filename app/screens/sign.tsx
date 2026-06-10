import { HeaderTitle } from "@react-navigation/elements";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";
import { images } from "@/app/constants/assets";

export function Sign() {
  return (
    <View>
            <Image source={images.logoSign} style={styles.headerImage}/>

    <View style={styles.container}>
      <HeaderTitle style={styles.Title}>Bem-Vindo(a)!</HeaderTitle>
      <Text style={styles.SubTitle}>
        Faça login para continuar sua jornada com a gente
      </Text>

      <View style={styles.columnOne}>
        <Text>E-mail</Text>
        <TextInput placeholder="seuemail@exemplo.com" style={styles.Input} />
        <Text>Senha</Text>
        <TextInput placeholder="Digite sua senha" style={styles.Input} />

        <View style={styles.FormActions}>
          <Text style={styles.TextRemenber}>Lembrar de mim</Text>
          <TouchableOpacity>
            <Text style={styles.TextForgot}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.ButtonSign}>
          <Text style={styles.ButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.SignUpContainer}>
        <Text>Não tem uma Conta?</Text>
        <TouchableOpacity>
          <Text>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
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
  SubTitle: {
    textAlign: "center",
  },
  TextForgot: {
    color: colors.purple600,
  },
  TextRemenber: {
    color: colors.gray500,
    flex: 1,
  },

  bottomText: {
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
  FormActions: {
    flexDirection: "row",
    marginVertical: 10,
  },
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
  SignUpContainer: {
    flexDirection: "row",
  },
  headerImage: {
    width: "100%",
    height: 210,
  },
});
