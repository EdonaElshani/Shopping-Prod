import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { flexLogo } from "../constants/Images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.questionMarkContainer}>
        <Text style={styles.questionMark}>?</Text>
      </View>
      <View>
        <Image source={flexLogo} style={styles.logoImg} />
      </View>

      <View>
        <Text style={styles.forgotPwText}>You've forgotten your password?</Text>
        <View>
          <CustomInput
            placeholder="Username / Email"
            icon="account-circle-outline"
          />
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

      <View style={styles.goBackView}>
        <MaterialCommunityIcons name={"arrow-left"} size={22} color="#fff" />
        <Pressable>
          <Text style={styles.goBackText}>Go back</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3445",
    alignItems: "center",
    justifyContent: "space-around",
    color: "#FFF",
    flexDirection: "column",
    gap: 5,
  },
  questionMarkContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  questionMark: {
    fontSize: 450,
    color: "rgba(255, 255, 255, 0.05)",
  },
  logoImg: {
    width: "250px",
    height: "150px",
    marginBottom: "20px",
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
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  btnText: {
    color: "#1F2A44",
    fontSize: "16px",
    fontFamily: "Open Sans",
    fontWeight: "700",
    textAlign: "center",
  },
  goBackView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  },
  goBackText: {
    color: "#FFFFFF",
    paddingHorizontal: "10px",
  },
});
