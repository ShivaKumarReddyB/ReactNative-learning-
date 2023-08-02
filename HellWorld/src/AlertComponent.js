import { Alert, Button } from "react-native";

export const AlertComponent = () => {
  return (
    <>
      <Button title={"submit"} onPress={() => Alert.alert("Error")} />
      {/*alert with message*/}
      <Button
        title={"submit 2"}
        onPress={() => Alert.alert("Error", "invalid  data")}
      />
      {/*alert with multiple buttons*/}
      <Button
        title={"submit 3"}
        onPress={() =>
          Alert.alert("Error", "invalid  data", [
            {
              text: "cancel",
            },
            {
              text: "show error field",
              onPress: () => console.log("show "),
            },
          ])
        }
      />
    </>
  );
};
