import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar';

import {useTranslation} from 'react-i18next';

import HomePage from '../../HomePage/HomePage';
import CalendarPage from '../../CalendarPage/CalendarPage';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'black', //#0057b8
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#ffee9a',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: t('home'),
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: 'bold',
            },
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faHome} color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarPage}
          options={{
            tabBarLabel: t('calendar'),
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: 'bold',
            },
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faCalendar} color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
