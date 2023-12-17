import React from 'react';
import {View, Text, StyleSheet, Image, Linking, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

const Header = () => {
  const {t} = useTranslation();

  const myDate = useSelector(state => state.date.value);

  const startWarDate = new Date('2022-02-24');
  const currentWarDate = new Date(myDate);
  const warDay =
    Math.ceil(
      Math.abs(startWarDate.getTime() - currentWarDate.getTime()) /
        (1000 * 3600 * 24),
    ) + 1;

  const onPressLogo = () => {
    Linking.openURL('https://www.mil.gov.ua/');
  };
  // console.log('render Header');
  return (
    <View style={styles.header}>
      <View style={styles.logoBlock}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{t('title')}</Text>
          <Text style={styles.titleBig}>{t('titleBig')}</Text>
        </View>
        <Pressable onPress={onPressLogo}>
          <Image
            style={styles.logo}
            source={require('../../../icon/mil-logo.png')}
          />
        </Pressable>
      </View>
      <View style={styles.dateBlock}>
        <Text style={styles.day}>
          {t('intlDateTime', {
            val: currentWarDate,
            formatParams: {
              val: {year: 'numeric', month: 'long', day: 'numeric'},
            },
          })}
        </Text>
        <Text style={styles.dayWarText}>
          {t('warDay', {count: warDay, ordinal: true})}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 10,
  },
  logoBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleBlock: {
    width: '80%',
  },
  logo: {
    width: 64,
    height: 64,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'transparent',
  },
  titleBig: {
    fontSize: 24,
    fontWeight: '900',
    color: 'black',
    backgroundColor: 'transparent',
  },
  dateBlock: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'transparent',
  },
  dayWarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'transparent',
  },
});

export default Header;
