import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalVisible(false);
  };

  function addGoalHandler(userGoal) {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      { text: userGoal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  const deleteGoalItem = (id) => {
    setGoalsList((currentGoalsList) => {
      return currentGoalsList.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>GOALS APP</Text>
        </View>
        <Button
          title="Add New Goal"
          color={"#5e0acc"}
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalVisible}
          btnHandler={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.golasListContainer}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalItem}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "skyblue",
  },

  titleContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    color: "purple",
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "500",
  },
  golasListContainer: {
    paddingTop: 20,
    flex: 3,
  },
});
