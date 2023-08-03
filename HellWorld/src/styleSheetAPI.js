import { Text, View, StyleSheet } from "react-native";

export const StyleSheetAPIComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>StyleSheet API</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "blue", padding: 60 },
  tittle: { color: "white" },
});
