import React, { FC, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Modal,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";

type Props = {
  onStartGame: (selectedNumber: number) => void;
};

const StartGameScreen: FC<Props> = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(Number);

  const inputHandler = (inputValue: string) => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Modal transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={resetInputHandler}>
          <View style={styles.modalContainer}>
            <Card style={styles.summaryContainer}>
              <Text style={{ ...styles.title, color: colors.blue }}>
                You selected
              </Text>
              <NumberContainer>{selectedNumber}</NumberContainer>
              <View style={{ ...styles.button, marginTop: 10 }}>
                <Button
                  title="Start Game"
                  onPress={() => onStartGame(selectedNumber)}
                  color={colors.blue}
                />
              </View>
            </Card>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <ImageBackground
          source={require("../assets/math-pattern.png")}
          resizeMode="cover"
          style={styles.backgroundImage}
        />
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.subtitle}>Select a Number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            blurOnSubmit
            onChangeText={inputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={colors.ochre}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={colors.blue}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: colors.dark,
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  input: {
    width: 50,
  },
  button: {
    width: "40%",
    backgroundColor: colors.background,
    borderRadius: 10,
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    shadowRadius: 2,
    shadowOpacity: 0.3,
  },
  subtitle: {
    fontSize: 16,
    color: colors.dark,
  },
  backgroundImage: {
    opacity: 0.1,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  summaryContainer: {
    margin: 20,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});

export default StartGameScreen;
