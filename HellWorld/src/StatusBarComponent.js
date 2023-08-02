import { View, StatusBar } from "react-native";

export const StatusBarComponent = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "green", padding: 60 }}>
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
};
