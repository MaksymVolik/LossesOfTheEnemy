import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import DayInfo from './commons/DayInfo';

const CalendarPage = () => {
  // console.log('render Calendar');
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0.3}}
        end={{x: 0.7, y: 1}}
        locations={[0, 0.45, 0.75]}
        colors={['#9ecbff', '#fff', '#ffee9a']}
        style={styles.linearGradient}>
        <DayInfo />
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
    padding: 15,
  },
});

export default CalendarPage;
