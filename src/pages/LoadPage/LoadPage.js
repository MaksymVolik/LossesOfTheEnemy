import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useDispatch} from 'react-redux';
import {fetchStats} from '../../redux/statsSlice';
import {onChangeDate} from '../../redux/dateSlice';

import {useStorage} from '../../hooks/useStorage';
import {deviceLanguage} from '../../translate/deviceLanguage';
import i18n from '../../translate/118n';

import Spinner from './commons/Spinner';
import Navigator from './commons/Navigator';

const LoadPage = () => {
  // console.log('render LoadPage');
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const {getData} = useStorage();
  const defaultLanguage = deviceLanguage();

  const fetchData = lng => {
    dispatch(fetchStats({date: 'latest', language: lng})).then(res => {
      dispatch(onChangeDate(res.payload.date));
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData('language', defaultLanguage).then(lng => {
      i18n.changeLanguage(lng);
      fetchData(lng);
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <SafeAreaView style={styles.container}>
          <LinearGradient
            start={{x: 0, y: 0.3}}
            end={{x: 0.7, y: 1}}
            locations={[0, 0.45, 0.75]}
            colors={['#9ecbff', '#fff', '#ffee9a']}
            style={styles.linearGradient}>
            <Spinner />
          </LinearGradient>
        </SafeAreaView>
      ) : (
        <Navigator />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  linearGradient: {
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default LoadPage;
