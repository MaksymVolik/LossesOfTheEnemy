import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useTranslation} from 'react-i18next';

const StatsItem = ({stats, increase, title, icon}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.statsItemBlock}>
      <View style={styles.statsImage}>
        <SvgUri width="100%" height="100%" uri={icon} />
      </View>
      <View style={styles.textBlock}>
        <Text style={styles.textAll}>
          {t('intlNumber', {val: stats})}
          <Text style={styles.textPlus}>{` (+${increase})`}</Text>
        </Text>
        <Text style={styles.textName}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsItemBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingTop: 15,
    paddingBottom: 15,
  },
  statsImage: {
    width: 89,
    height: 56,
  },
  textBlock: {
    marginLeft: 20,
    flex: 1,
  },
  textAll: {
    fontSize: 22,
    fontWeight: '900',
    color: 'black',
    backgroundColor: 'transparent',
  },
  textPlus: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    backgroundColor: 'transparent',
  },
  textName: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    backgroundColor: 'transparent',
  },
});

export default StatsItem;
