import React, {FC} from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
}

const Header: FC<Props> = ({title}) => {
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
    backgroundColor: "#62477a",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#dbc2f2",
    fontSize: 18
  },
});

export default Header;
