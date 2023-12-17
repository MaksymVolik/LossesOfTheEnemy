import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Spinner;
