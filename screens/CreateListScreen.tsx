import React from "react";
import styled from "styled-components/native";
import { View, Button, StyleSheet } from "react-native";

const CreateListScreen = () => {
  return (
    <View style={styles.container}>
      <StyledText>😎</StyledText>
      <Button
        title="Create a new list"
        onPress={() => console.log("on press")}
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

export default CreateListScreen;
