import React, {useState, useEffect} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

import {useDispatch, useSelector} from 'react-redux';
import {onChangeDate} from '../../../redux/dateSlice';
import {fetchStats} from '../../../redux/statsSlice';
import en from '../../../translate/trans/calendar_en.json';
import ua from '../../../translate/trans/calendar_ua.json';
import i18n from '../../../translate/118n';

LocaleConfig.locales.en = en;

LocaleConfig.locales.ua = ua;

const CalendarItem = () => {
  const [selected, setSelected] = useState('');
  const myDate = useSelector(state => state.date.value);
  const dispatch = useDispatch();

  LocaleConfig.defaultLocale = i18n.language;

  const maxDate = new Date().toISOString().split('T')[0];
  const minDate = '2022-02-24';

  useEffect(() => {
    setSelected(myDate);
  }, [myDate]);

  const onDate = day => {
    dispatch(onChangeDate(day.dateString));
    dispatch(fetchStats({date: day.dateString, language: i18n.language}));
  };

  return (
    <Calendar
      displayLoadingIndicator={false}
      firstDay={1}
      initialDate={myDate}
      minDate={minDate}
      maxDate={maxDate}
      enableSwipeMonths={true}
      onDayPress={day => {
        onDate(day);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: 'orange',
        },
      }}
      theme={{
        textDayFontWeight: '700',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '500',
      }}
    />
  );
};

export default CalendarItem;
