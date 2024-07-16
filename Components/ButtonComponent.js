import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonComponent = ({title, onPress}) => {
  return (
    <View>
      {/* <Button title={title} onPress={onPress} color="#6200EE" /> */}
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginTop: 16,
          padding: 10,
          backgroundColor: '#6200EE',
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Đăng kí</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
