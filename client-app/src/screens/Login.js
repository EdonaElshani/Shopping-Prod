import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  CheckBox,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { flexLogo } from "../constants/Images";
import CustomInput from "../components/CustomInput";

const Login = ({ navigation }) => {
  const [rememberMeIsSelected, setRememberMeIsSelected] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Image source={flexLogo} style={styles.logoImg} />
      </View>
      <View>
        <Text style={styles.loginText}>Login to your account</Text>
        <View>
          <CustomInput
            placeholder="Username / Email"
            icon="account-circle-outline"
          />
          <CustomInput placeholder="Password" icon="key" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              value={rememberMeIsSelected}
              onValueChange={() =>
                setRememberMeIsSelected(!rememberMeIsSelected)
              }
            />
            <Text style={styles.checkboxLabel}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPwLabel}>I forgot my password</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={styles.btnText}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3445",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",
    flexDirection: "column",
    gap: 5,
  },
  logoImg: {
    width: "250px",
    height: "150px",
    marginBottom: "20px",
  },
  loginText: {
    color: "#FFF",
    fontSize: "16px",
    fontFamily: "Open Sans",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "20px",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginVertical: 5,
    color: "#FFF",
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
  checkboxLabel: {
    color: "#FFF",
    paddingHorizontal: "10px",
    fontSize: "14px",
    fontFamily: "Open Sans",
  },
  forgotPwLabel: {
    color: "#FFF",
    marginVertical: 5,
    fontSize: "14px",
    fontFamily: "Open Sans",
  },
});
