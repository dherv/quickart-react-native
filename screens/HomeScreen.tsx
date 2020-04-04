import React, { FC } from "react";
import styled from "styled-components/native";
import { View, Button, StyleSheet } from "react-native";
import { NavigatorProps } from "../types/navigator.types";

const HomeScreen = ({ navigation }: NavigatorProps<"CreateList">) => {
  return (
    <View style={styles.container}>
      <StyledText>😎</StyledText>
      <Button
        title="Create a new list"
        onPress={() => navigation.navigate("CreateList")}
      ></Button>
    </View>
  );
};

const StyledText = styled.Text`
  font-size: 64px;
`;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
