import React, { FC, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Alert,
} from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import colors from "../constants/colors";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

type Props = { userChoice: number; onGameOver: (numOfRounds: number) => void };

const GameScreen: FC<Props> = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((curRounds) => curRounds + 1);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/math-pattern.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <Text style={styles.title}>Opponent's Guess</Text>
      <Card style={styles.card}>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Lower"
              onPress={nextGuessHandler.bind(this, "lower")}
              color={colors.blue}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Greater"
              onPress={nextGuessHandler.bind(this, "greater")}
              color={colors.blue}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  card: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "80%",
  },
  backgroundImage: {
    opacity: 0.1,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: colors.dark,
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
});

export default GameScreen;
