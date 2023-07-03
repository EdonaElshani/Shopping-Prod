import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomInput = ({ placeholder, icon, ...rest }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.input} {...rest} />
      <MaterialCommunityIcons
        name={icon}
        size={22}
        color="#1E34451A"
        style={styles.icon}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
    fontSize: "14px",
    backgroundColor: "#fff",
    fontFamily: "Open Sans",
  },
  input: {
    paddingHorizontal: 10,
    width: "320.678px",
    height: " 39.303px",
    paddingVertical: 8,
    paddingLeft: 8,
    color: "rgba(35, 31, 32, 0.50)",
    outlineColor: "transparent",
    borderRadius: 8,
  },
  icon: {
    paddingRight: "8px"
  },
});

export default CustomInput;
