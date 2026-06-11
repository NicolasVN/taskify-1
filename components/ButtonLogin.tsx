import { colors } from "@/constants/colors";
import { StyleSheet, Text, TouchableOpacity, View, ImageSourcePropType, Image } from "react-native";

interface TextButton {
  label: string;
  icon: ImageSourcePropType;
}

export function ButtonLogin({ label, icon }: TextButton) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.ButtonSign}>
        <Image
        source={icon}
        style={styles.Icon}
        />
        <Text style={styles.Text}>{label}</Text>
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
    borderColor: colors.gray300,
    flexDirection: "row"
  },

  Text: {
    color: colors.black,
        fontWeight: "bold"

  },
  Icon: {
    width: 20,
    height:20,
    marginRight:8
  }
});
