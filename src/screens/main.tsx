import React from "react";
import { Pressable } from "react-native";

import {
  Text,
  Box,
  Center,
  VStack,
  themeTools,
  useTheme,
  useColorMode,
  useColorModeValue,
} from "native-base";

import ThemeToggler from "../components/theme-toggle";
import AnimatedCheckbox from "../components/animated-checkbox";

const MainScreen = () => {
  const [checked, setChecked] = React.useState(false);
  const handlePressCheckbox = React.useCallback(() => {
    setChecked((prev) => !prev);
  }, []);
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box w="100px" h="100px">
          <Pressable onPress={handlePressCheckbox}>
            <AnimatedCheckbox {...{ checked }}></AnimatedCheckbox>
          </Pressable>
        </Box>
        <Box>
          <Text>Hello World</Text>
        </Box>
        <ThemeToggler></ThemeToggler>
      </VStack>
    </Center>
  );
};

export default MainScreen;
