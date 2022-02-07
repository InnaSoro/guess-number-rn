import React, { FC } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

import colors from "../constants/colors";

type Props = {
  style: ViewStyle;
};

const Card: FC<Props> = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
