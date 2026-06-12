import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "@/constants/colors";
import { images } from "@/constants/assets";

export function Home() {
  return (
    <View style={styles.HeaderContainer}>
      <View>
        <Image source={images.headerHome} style={styles.HeaderImage} />

        <View style={styles.HeaderContent}>
          <Text style={styles.Title}>Olá, Nicolas</Text>

          <Text style={styles.SubTitle}>Vamos ser produtivos hoje?</Text>
        </View>
        <View style={styles.Container}>
          <View style={styles.ColumnStats}>
            <View style={styles.StatsCard}>
              <Text style={styles.NumberStatsCard}>12</Text>
              <Text style={styles.TextStatsCard}>Tarefas pendentes</Text>
            </View>
            <View style={styles.StatsCard}>
              <Text style={styles.NumberStatsCard}>8</Text>
              <Text style={styles.TextStatsCard}>Concluidas hoje</Text>
            </View>
            <View style={styles.StatsCard}>
              <Text style={styles.NumberStatsCard}>3</Text>
              <Text style={styles.TextStatsCard}>Em atraso</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 1, fontWeight: "bold" }}>Minhas tarefas</Text>
            <TouchableOpacity>
              <Text style={{ color: colors.purple500 }}>Ver todas</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 20,
  },

  HeaderContainer: {
    position: "relative",
  },

  HeaderImage: {
    width: "100%",
    height: 210,
  },

  HeaderContent: {
    position: "absolute",
    left: 20,
    top: 60,
  },

  Title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },

  SubTitle: {
    color: colors.white,
    marginTop: 4,
    fontSize: 16,
  },

  StatsCard: {
    backgroundColor: colors.purple200,
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
    padding: 10,
  },

  ColumnStats: {
    flexDirection: "row",
    justifyContent: "center",
  },

  NumberStatsCard: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.purple700,
  },

  TextStatsCard: {
    color: colors.purple500,
    textAlign: "center",
  },
});
