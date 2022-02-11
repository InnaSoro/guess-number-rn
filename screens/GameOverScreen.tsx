import React, { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import colors from "../constants/colors";

type Props = { rounds: number; userNumber: number; onRestart: () => void };

const GameOverScreen: FC<Props> = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Numder was: {userNumber}</Text>
      <Button title="New Game" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
