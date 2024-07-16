import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Block = ({title, children}) => {
  return (
    <View style={styles.block}>
      <Text style={styles.blockTitle}>{title}</Text>
      <View style={styles.blockContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 10,
    backgroundColor: '#acacac',
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  blockTitle: {
    color: '#6200EE',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  blockContent: {
    padding: 8,
  },
});

export default Block;
