import { images } from "@/constants/assets";
import { HeaderTitle } from "@react-navigation/elements";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "@/constants/colors";
import { InputText } from "../components/InputText";
import { Button } from "../components/Button";
import { ButtonLogin } from "../components/ButtonLogin";
import { Checkbox } from "../components/CheckBox";

export function Register() {
  return (
    <View style={styles.Screen}>
      <Image source={images.logo} style={styles.HeaderImage} />

      <View style={styles.Container}>
        <HeaderTitle style={styles.Title}>Criar conta</HeaderTitle>

        <Text style={styles.Subtitle}>Preencha os dados para começar</Text>

        <View style={styles.FormContainer}>
          <InputText
            label="Nome completo"
            placeholder="Seu nome completo"
            icon="person-outline"
          />
          <View style={styles.Spacer} />

          <InputText
            label="E-mail"
            placeholder="seuemail@exemplo.com"
            icon="mail-outline"
          />

          <View style={styles.Spacer} />

          <InputText
            label="Senha"
            placeholder="Digite sua senha"
            icon="lock-closed-outline"
            isPassword
          />
          <View style={styles.Spacer} />

          <InputText
            label="Confirmar senha"
            placeholder="Confirme sua senha"
            icon="lock-closed-outline"
            isPassword
          />
<View style={styles.Spacer}>
          <Checkbox label="Aceito os Termos de Uso e a Política de Privacidade" />
</View>
          <Button label="Cadastrar" />

          <View style={styles.Divider}>
            <View style={styles.DividerLine} />

            <Text style={styles.DividerText}>ou entre com</Text>

            <View style={styles.DividerLine} />
          </View>

          <View style={styles.SocialButtonsRow}>
            <ButtonLogin label="Google" icon={images.google} />

            <View style={styles.SocialButtonSpacing} />

            <ButtonLogin label="Apple" icon={images.apple} />
          </View>
        </View>

        <View style={styles.Row}>
          <Text>Já tem uma conta?</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Sign")}>
            <Text style={styles.ForgotPasswordText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    marginTop:20
  },

  Container: {
    flex: 1,
    margin: 20,
  },

  HeaderImage: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  ContainerImage: {
    width:100
  },

  Title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },

  Subtitle: {
    textAlign: "center",
    color: colors.gray500,
  },

  FormContainer: {
    marginTop: 50,
  },

  ForgotPasswordText: {
    color: colors.purple600,
    fontWeight: "bold",
  },

  Row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    flex:1,
  },

  SocialButtonsRow: {
    flexDirection: "row",
    justifyContent: "center",
  },

  SocialButtonSpacing: {
    width: 10,
  },

  Divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  DividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray300,
  },

  DividerText: {
    marginHorizontal: 12,
    color: colors.gray500,
    fontSize: 14,
  },

  Spacer: {
    marginVertical: 10,
  },
});
