import React from 'react';
import {Text, View, StyleSheet, Pressable, Linking} from 'react-native';

import {useTranslation} from 'react-i18next';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';

import {useLinking} from '../../../hooks/useLinking';

import LangMenu from '../../../translate/LangMenu';

const Footer = () => {
  const {t} = useTranslation();
  const {sendWhatsApp} = useLinking({
    tel: '380960564754',
    message: 'Hello',
  });
  // console.log('render Footer');

  const onPressMail = () => {
    Linking.openURL('mailto: maksymvolik@gmail.com');
  };

  return (
    <View style={styles.footer}>
      <View style={styles.msgBlock}>
        <Pressable onPress={onPressMail}>
          <FontAwesomeIcon icon={faEnvelope} size={24} />
        </Pressable>
        <Pressable onPress={sendWhatsApp}>
          <FontAwesomeIcon icon={faWhatsapp} size={24} />
        </Pressable>
      </View>
      <Text style={styles.developer}>{t('footer')}</Text>
      <LangMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 40,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    columnGap: 10,
  },
  msgBlock: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 15,
  },
  developer: {
    fontSize: 14,
    color: 'black',
  },
});

export default Footer;
