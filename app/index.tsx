import { StyleSheet, View } from "react-native";
import { Sign } from "./screens/sign";

export default function Page() {
  return (
    <View style={styles.container}>
<Sign/>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
            backgroundColor: '#F3F4F6',

  },
});
