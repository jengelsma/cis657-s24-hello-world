import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from '@rneui/themed';

const Greeter = ({ greeting, buttonTitle }) => {
  const [state, setState] = useState({ name: '', greeting });

  const updateStateObject = (vals) => {
    setState({
      ...state,
      ...vals,
    });
  };

  return (
    <View style={styles.container}>
      <Text> {state.greeting} </Text>
      <TextInput
        placeholder='Enter your name'
        onChangeText={(val) => updateStateObject({ name: val })}
        value={state.name}
      />
      <Button
        title={buttonTitle}
        onPress={() => {
          updateStateObject({ greeting: `${greeting} to you ${state.name}` });
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
