import {useCallback} from 'react';
import {Linking, Alert, Platform} from 'react-native';
import {useTranslation} from 'react-i18next';

export const useLinking = ({tel, message}) => {
  const {t} = useTranslation();

  const sendWhatsApp = useCallback(() => {
    const mobile = tel ? (Platform.OS === 'ios' ? tel : '+' + tel) : undefined;

    if (mobile) {
      if (message) {
        let url = 'whatsapp://send?text=' + message + '&phone=' + mobile;
        Linking.openURL(url)
          .then(() => {})
          .catch(() => {
            Alert.alert(t('not supported'));
            // alert('Make sure WhatsApp installed on your device');
          });
      } else {
        Alert.alert(t('message to send'));
      }
    } else {
      Alert.alert(t('mobile no'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {sendWhatsApp};
};
