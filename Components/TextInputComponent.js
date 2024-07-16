import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const TextInputComponent = ({placeholder, value, onChangeText}) => {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
    marginStart:10,
    marginEnd:10
  },
});

export default TextInputComponent;
