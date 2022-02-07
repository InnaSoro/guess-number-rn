import React, { FC } from "react";
import { TextInput, StyleSheet, ViewStyle } from "react-native";

import colors from "../constants/colors";

type Props = {
  style: ViewStyle;
  keyboardType: any;
  maxLength: number;
  blurOnSubmit: boolean;
  onChangeText: (inputValue: string) => void;
  value: string;
};

const Input: FC<Props> = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: colors.dark,
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default Input;
