import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useTranslation} from 'react-i18next';

const DayInfoItem = ({stats, increase, icon, title}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.statsItemBlock}>
      <View style={styles.statsImage}>
        <SvgUri width="100%" height="100%" uri={icon} />
      </View>
      <View style={styles.textBlock}>
        <View style={styles.stats}>
          <Text style={styles.textPlus}>{` (+${increase})`}</Text>
          <Text style={styles.textAll}>{t('intlNumber', {val: stats})}</Text>
        </View>
        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.textName}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsItemBlock: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: 'black',
    paddingTop: 10,
    paddingBottom: 10,
  },
  statsImage: {
    width: 50,
    height: 32.5,
    marginBottom: 5,
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    padding: 5,
  },
  textAll: {
    position: 'relative',
    fontSize: 16,
    fontWeight: '900',
    color: 'black',
    backgroundColor: 'transparent',
  },
  textPlus: {
    position: 'absolute',
    right: -16,
    top: -10,
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
    backgroundColor: 'transparent',
  },
  textName: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
    backgroundColor: 'transparent',
  },
});

export default DayInfoItem;
