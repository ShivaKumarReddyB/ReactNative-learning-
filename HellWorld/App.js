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

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        //   padding: 60,
      }}
    >
      {/* The below code is upto the topics of pressable  */}
      {/*<ScrollView>*/}
      {/*  /!*<Image source={logoIcon} style={{ flex: 1, backgroundColor: "green" }}>*!/*/}
      {/*  /!*<Text>Hello World</Text>*!/*/}
      {/*  <Pressable*/}
      {/*    onPress={() => console.log("on press")}*/}
      {/*    onPressIn={() => console.log("called onPressin")}*/}
      {/*    onPressOut={() => console.log("called onPressOut")}*/}
      {/*    onLongPress={() => console.log("called onLongPress")}*/}
      {/*  >*/}
      {/*    <Image source={splashIcon} style={{ width: 100, height: 100 }} />*/}
      {/*  </Pressable>*/}
      {/*  <Button*/}
      {/*    title={"scroll down"}*/}
      {/*    onPress={() => console.log("onPress called ")}*/}
      {/*  />*/}
      {/*  /!*</Image>*!/*/}
      {/*  <Text>*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie*/}
      {/*    porttitor malesuada. In pulvinar aliquet ante. Suspendisse id posuere*/}
      {/*    velit. Maecenas diam felis, porta non volutpat quis, sollicitudin vel*/}
      {/*    turpis. Donec sed mauris vitae quam tincidunt eleifend. Donec gravida*/}
      {/*    mauris sit amet nunc suscipit semper. Quisque lacus metus, volutpat*/}
      {/*    vel dictum eu, vulputate eu mauris. Vestibulum et justo quis odio*/}
      {/*    commodo interdum a nec magna. Nunc auctor eros nec dui elementum*/}
      {/*    elementum. Maecenas laoreet quis neque eu laoreet. Ut id erat egestas,*/}
      {/*    auctor nulla id, venenatis justo. Nunc sit amet rutrum ex. Morbi et*/}
      {/*    ipsum in massa cursus ultrices eu ac quam. Quisque elit massa,*/}
      {/*    vulputate at maximus non, fringilla vel elit. Nunc sagittis neque eget*/}
      {/*    turpis semper, in fringilla neque suscipit. Donec pellentesque erat*/}
      {/*    convallis dui semper, sit amet sollicitudin velit blandit. Vestibulum*/}
      {/*    placerat libero quis lectus pharetra, eu pharetra nisl ultrices. In*/}
      {/*    imperdiet et justo ut viverra. Aliquam scelerisque laoreet dolor vel*/}
      {/*    malesuada. Donec at posuere lacus. Etiam et augue id eros vulputate*/}
      {/*    feugiat. Donec sed nulla et tellus cursus volutpat et vitae odio. Nam*/}
      {/*    bibendum efficitur nisi at lobortis. Nunc sit amet nunc sit amet ante*/}
      {/*    sollicitudin vulputate vitae vel tortor. Pellentesque ultrices rutrum*/}
      {/*    urna, id ultricies nisi vulputate et. Sed nec interdum ipsum,*/}
      {/*    elementum sagittis nulla. Maecenas imperdiet orci id arcu bibendum,*/}
      {/*    vel cursus odio lobortis. Cras gravida, risus vel convallis lacinia,*/}
      {/*    massa nibh sollicitudin enim, eget fermentum diam turpis id neque.*/}
      {/*    Suspendisse ante leo, commodo id diam et, bibendum congue tellus.*/}
      {/*    Quisque at risus vel magna lacinia vestibulum et sit amet ex. Cras non*/}
      {/*    auctor leo. Aenean velit orci, vestibulum eget arcu nec, fermentum*/}
      {/*    dapibus eros. Phasellus porta purus rutrum nisi vestibulum iaculis. Ut*/}
      {/*    sit amet porttitor magna, eu tincidunt massa. Nunc felis nisl, commodo*/}
      {/*    nec purus sed, lacinia molestie lorem. Mauris vel convallis elit.*/}
      {/*    Morbi malesuada odio purus, ut eleifend dui auctor nec. Pellentesque*/}
      {/*    tempor, augue sed luctus aliquam, enim turpis sollicitudin turpis, sit*/}
      {/*    amet tempus sapien orci nec ligula. Nullam nec aliquam urna. Duis*/}
      {/*    tincidunt feugiat quam, nec fringilla dolor molestie faucibus. Morbi*/}
      {/*    eget lectus est. Aenean eu condimentum tortor. Vestibulum metus arcu,*/}
      {/*    semper nec diam vel, iaculis vulputate erat. Vivamus viverra auctor*/}
      {/*    erat, egestas congue nisi vestibulum at. Vestibulum vestibulum libero*/}
      {/*    id mi rhoncus maximus. Sed convallis orci vitae enim mattis, id*/}
      {/*    fermentum massa tristique. Vestibulum eget enim efficitur, elementum*/}
      {/*    neque sed, maximus tellus. In convallis purus hendrerit neque gravida,*/}
      {/*    a fermentum mauris ultricies. Morbi vitae fauc*/}
      {/*  </Text>*/}
      {/*</ScrollView>*/}
      {/*<ModalComponent />*/}
      <StatusBarComponent />
    </View>
  );
}
