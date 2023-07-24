import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

export const ModalComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View>
      <Button
        title={"Press"}
        onPress={() => setIsModalVisible(true)}
        color={"midnightblue"}
      />
      {/** The Modal component is a basic way to present content above an enclosing view.
             The props passed to the modal component are
             1. visible : which acts as a boolean to open/close the modal
             2. onRequestClose : This is used  in android for closing the modal
             3. animationType : provide the effect how open and close the modal it accepts three values default is
             "none"| "slide" | "fade"
             4. presentation Style : only used in ios

             */}
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType={"slide"}
        // animationType={"fade"}
        presentationStyle={"formSheet"}
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            title={"Close"}
            color={"midnightblue"}
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};
