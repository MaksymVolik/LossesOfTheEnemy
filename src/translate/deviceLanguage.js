import {Platform, NativeModules} from 'react-native';

export const deviceLanguage = () => {
  const deviceLng =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  const defaultLanguage = deviceLng.includes('UA') ? 'ua' : 'en';

  return defaultLanguage;
};
