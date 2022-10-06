import React from "react";

import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { View, Text } from "react-native";

import theme from "../theme";

type Props = {
  children: React.ReactNode;
};

const AppContainer: React.FC<Props> = ({ children }) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
