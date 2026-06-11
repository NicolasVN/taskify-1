import { images } from "@/constants/assets";
import { HeaderTitle } from "@react-navigation/elements";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/colors";
import { InputText } from "@/components/InputText";
import { Button } from "@/components/Button";
import { ButtonLogin } from "@/components/ButtonLogin";
import { Checkbox } from "@/components/CheckBox";

export function Sign() {
  return (
    <View style={styles.Screen}>
      <Image source={images.logoSign} style={styles.HeaderImage} />

      <View style={styles.Container}>
        <HeaderTitle style={styles.Title}>Bem-Vindo(a)!</HeaderTitle>

        <Text style={styles.Subtitle}>
          Faça login para continuar sua jornada com a gente
        </Text>

        <View style={styles.FormContainer}>
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

          <View style={styles.FormActions}>
            <Checkbox label="Lembrar de mim" />

            <TouchableOpacity>
              <Text style={styles.ForgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>

          <Button label="Entrar" />

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
          <Text>Não tem uma conta?</Text>

          <TouchableOpacity>
            <Text style={styles.ForgotPasswordText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },

  Container: {
    flex: 1,
    margin: 20,
  },

  HeaderImage: {
    width: "100%",
    height: 210,
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
    flex: 1,
    marginTop: 50,
  },

  FormActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },

  ForgotPasswordText: {
    color: colors.purple600,
    fontWeight: "bold",
  },

  Row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    height: 10,
  },
});
