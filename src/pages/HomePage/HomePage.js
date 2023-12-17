import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from './commons/Header';
import Stats from './commons/Stats';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0.3}}
        end={{x: 0.7, y: 1}}
        locations={[0, 0.45, 0.75]}
        colors={['#9ecbff', '#fff', '#ffee9a']}
        style={styles.linearGradient}>
        <Header />
        <Stats />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default HomePage;
