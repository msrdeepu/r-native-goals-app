import { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [userGoal, setUserGoal] = useState("");

  function goalInputHandler(text) {
    //console.log(text);
    setUserGoal(text);
  }
  const addGoalHandler = () => {
    props.btnHandler(userGoal);
    setUserGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imgItem}
          source={require("../assets/images/goals-new-img.png")}
        />
        <TextInput
          style={styles.textInputItem}
          placeholder="Enter Your Next Goal"
          onChangeText={goalInputHandler}
          value={userGoal}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btnSpace}>
            <Button title="Add Now!" onPress={addGoalHandler} />
          </View>
          <View style={styles.btnSpace}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    flexDirection: "space-between",
    alignItems: "center",
    padding: 20,

    backgroundColor: "#311b6b",
  },
  textInputItem: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    marginBottom: 8,
    borderRadius: 6,
    padding: 15,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnSpace: {
    width: "40%",
    marginHorizontal: 8,
    marginTop: 8,
  },
  imgItem: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
