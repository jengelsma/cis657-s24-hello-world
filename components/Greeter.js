import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from '@rneui/themed';

const Greeter = ({ greeting, buttonTitle }) => {
  return (
    <View style={styles.container}>
      <Text> {greeting} </Text>
      <TextInput placeholder='Enter your name' />
      <Button title={buttonTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default Greeter;
