import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { flexLogo } from "../constants/Images";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ConfirmedPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.questionMarkContainer}>
        <Text style={styles.questionMark}>?</Text>
      </View>
      <View>
        <Image source={flexLogo} style={styles.logoImg} />
      </View>

      <View>
        <View style={styles.goBackView}>
          <MaterialCommunityIcons name={"arrow-left"} size={22} color="#fff" />
          <Pressable>
            <Text style={styles.goBackText}>Go back</Text>
          </Pressable>
        </View>
        <Text style={styles.confirmationText}>
          Please enter your username or email address so we can send you a
          confirmation link.
        </Text>
        <View>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Send Confirmation Link</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ConfirmedPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3445",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",
    flexDirection: "column",
  },
  questionMarkContainer: {
    position: "absolute",
  },
  questionMark: {
    fontSize: 350,
    color: "rgba(255, 255, 255, 0.05)",
  },
  logoImg: {
    width: "250px",
    height: "150px",
  },
  forgotPwText: {
    color: "#FFF",
    fontSize: "16px",
    fontFamily: "Open Sans",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "20px",
  },
  confirmationText: {
    color: "white",
    width: "320px",
    textAlign: "center",
    fontSize: "14px",
    paddingVertical: "10px",
    fontFamily: "Open Sans",
  },
  btn: {
    backgroundColor: "rgba(29, 161, 147, 1)",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: "16px",
    fontFamily: "Open Sans",
    fontWeight: "700",
    textAlign: "center",
  },
  goBackView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  goBackText: {
    color: "#FFFFFF",
    paddingHorizontal: "10px",
  },
});
