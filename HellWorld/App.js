import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import logoIcon from "./assets/adaptive-icon.png";
import splashIcon from "./assets/adaptive-icon.png";
import { ModalComponent } from "./src/ModalComponent";
import { StatusBarComponent } from "./src/StatusBarComponent";
import { AlertComponent } from "./src/AlertComponent";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        padding: 60,
        // backgroundColor: "plum",
      }}
    >
      {/*<StatusBarComponent />*/}
      <AlertComponent />
    </View>
  );
}
