import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../constants/colors";

type Props = {};

const NumberContainer: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.blue,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.blue,
    fontSize: 72,
  },
});

export default NumberContainer;
