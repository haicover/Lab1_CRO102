import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Banner = ({imageUrl}) => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://d3nax9sawz4kbl.cloudfront.net/company_logos/aedbaad1bf7526aa7fa3d85ad9c5c5dc.png',
        }}
        style={styles.banner}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default Banner;
