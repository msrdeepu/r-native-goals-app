import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = (props) => {
  // onPress={props.onDeleteItem.bind(this, props.id)}
  return (
    <View style={styles.goalListItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
  goalListItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
});
