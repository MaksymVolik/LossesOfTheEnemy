import React, {useCallback} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import StatsItem from './StatsItem';
import Footer from './Footer';
import Spinner from '../../LoadPage/commons/Spinner';

const Stats = () => {
  const {t} = useTranslation();
  const stats = useSelector(state => state.stats.stats);
  const statsLoadingStatus = useSelector(
    state => state.stats.statsLoadingStatus,
  );
  // console.log('render Stats');

  const renderItem = useCallback(({item}) => <StatsItem {...item} />, []);

  if (statsLoadingStatus === 'loading') {
    return <Spinner />;
  } else if (statsLoadingStatus === 'error') {
    return <Text style={styles.error}>{t('error')}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={stats}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        ListEmptyComponent={<Text style={styles.empty}>{t('empty data')}</Text>}
        ListFooterComponent={<Footer />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  empty: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});

export default Stats;
