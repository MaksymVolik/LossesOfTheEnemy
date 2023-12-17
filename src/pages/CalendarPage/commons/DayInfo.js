import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

import CalendarItem from './CalendarItem';
import DayInfoItem from './DayInfoItem';
import Spinner from '../../LoadPage/commons/Spinner';
import {fetchStats} from '../../../redux/statsSlice';

const DayInfo = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const stats = useSelector(state => state.stats.stats);
  const date = useSelector(state => state.date.value);
  const statsLoadingStatus = useSelector(
    state => state.stats.statsLoadingStatus,
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchStats({date: date, language: i18n.language})).then(res => {
      setRefreshing(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log('render DayInfo');

  const renderLoader = useCallback(() => {
    if (!refreshing) {
      if (statsLoadingStatus === 'loading') {
        return <Spinner />;
      } else if (statsLoadingStatus === 'error') {
        return <Text style={styles.error}>{t('error')}</Text>;
      }
      return <Text style={styles.empty}>{t('empty data')}</Text>;
    }
  }, [refreshing, statsLoadingStatus, t]);

  const renderItem = useCallback(({item}) => <DayInfoItem {...item} />, []);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        columnWrapperStyle={styles.row}
        data={
          statsLoadingStatus === 'loading' || statsLoadingStatus === 'error'
            ? []
            : stats
        }
        renderItem={renderItem}
        keyExtractor={item => item.name}
        ListEmptyComponent={renderLoader}
        ListHeaderComponent={CalendarItem}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    justifyContent: 'space-between',
    marginTop: 18,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
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

export default DayInfo;
