import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from '@rneui/themed';

const Greeter = ({ greeting, buttonTitle }) => {
  const [name, setName] = useState('');
  const [personalGreeting, setPersonalGreeting] = useState(greeting);
  console.log(name);
  return (
    <View style={styles.container}>
      <Text> {personalGreeting} </Text>
      <TextInput
        placeholder='Enter your name'
        onChangeText={setName}
        value={name}
      />
      <Button
        title={buttonTitle}
        onPress={() => {
          setPersonalGreeting(`${greeting} to you ${name}`);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default Greeter;
