import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Menu from "../screens/Menu";
import ForgotPassword from "../screens/ForgotPassword";
import ConfirmedPassword from "../screens/ConfirmedPassword";

const Stack = createNativeStackNavigator();
const AppNav = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"ConfirmedPassword"}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen
            name="ConfirmedPassword"
            component={ConfirmedPassword}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNav;
