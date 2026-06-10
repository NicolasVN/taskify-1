import { images } from "@/constants/assets";
import { HeaderTitle } from "@react-navigation/elements";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/colors";
import { InputText } from "@/components/InputText";
import { Button } from "@/components/Button";
import { ButtonLogin } from "@/components/ButtonLogin";
import { Checkbox } from "@/components/CheckBox";

export function Sign() {
  return (
    <View style={{ flex: 1 }}>
      <Image source={images.logoSign} style={styles.headerImage} />

      <View style={styles.container}>
        <HeaderTitle style={styles.Title}>Bem-Vindo(a)!</HeaderTitle>
        <Text style={styles.TextCenter}>
          Faça login para continuar sua jornada com a gente
        </Text>

        <View style={styles.columnOne}>
          <InputText label="E-mail" placeholder="seuemail@exemplo.com" />
          <InputText label="Senha" placeholder="Digite sua senha" />
          <View style={styles.FormActions}>
          <Checkbox label="Lembrar de mim"/>
            <TouchableOpacity>
              <Text style={styles.TextForgot}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
          <Button label="Entrar" />
          <Text style={styles.TextCenter}>ou entre com</Text>
          <View style={styles.DirectionRow}>
            <ButtonLogin label="Google" />
            <View style={styles.container} />
            <ButtonLogin label="Apple" />
          </View>
        </View>

        <View style={styles.DirectionRow}>
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
  },

  Title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
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

  FormActions: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center"
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

  DirectionRow: {
    flexDirection: "row",
  },

  headerImage: {
    width: "100%",
    height: 210,
  },

  TextCenter: {
    textAlign: "center",
  },

  columnOne: {
    marginVertical: 50,
  },
});
