import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../constants/colors";

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  headerTitle: {
    color: colors.dark,
    fontSize: 18,
  },
});

export default Header;
