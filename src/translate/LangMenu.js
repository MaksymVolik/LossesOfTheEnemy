import React, {useCallback} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import i18n from './118n';
import {useStorage} from '../hooks/useStorage';
import {useDispatch, useSelector} from 'react-redux';
import {fetchStats} from '../redux/statsSlice';

const LangMenu = () => {
  const dispatch = useDispatch();
  const date = useSelector(state => state.date.value);

  const {storeData} = useStorage();
  const changeLanguage = useCallback(lng => {
    i18n.changeLanguage(lng);
    storeData('language', lng);
    dispatch(fetchStats({date: date, language: lng}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.langMenu}>
      <Pressable
        disabled={i18n.language === 'ua'}
        onPress={() => changeLanguage('ua')}>
        <Text
          style={[styles.text, i18n.language === 'ua' ? styles.active : null]}>
          UA
        </Text>
      </Pressable>
      <Text style={styles.text}>|</Text>
      <Pressable
        disabled={i18n.language === 'en'}
        onPress={() => changeLanguage('en')}>
        <Text
          style={[styles.text, i18n.language === 'en' ? styles.active : null]}>
          EN
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  langMenu: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'black',
  },
  active: {
    color: 'grey',
  },
});

export default LangMenu;
