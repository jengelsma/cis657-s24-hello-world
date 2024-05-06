import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from '@rneui/themed';

const Greeter = () => {
  return (
    <View style={styles.container}>
      <Text> Hello World! </Text>
      <TextInput placeholder='Enter your name' />
      <Button title='Greet me please' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default Greeter;
