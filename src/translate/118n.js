// import {Alert} from 'react-native';
import {initReactI18next} from 'react-i18next';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import 'intl-pluralrules';
import {deviceLanguage} from './deviceLanguage';

import en from './trans/en.json';
import ua from './trans/ua.json';

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
};

const defaultLanguage = deviceLanguage();

console.log('defaultLanguage: ' + defaultLanguage);

// const languageDetector = {
//   type: 'languageDetector',
//   // If this is set to true, your detect function receives a callback function that you should call with your language,
//   //useful to retrieve your language stored in AsyncStorage for example
//   async: true,
//   init: () => {
//     /* use services and options */
//   },
//   detect: callback => {
//     AsyncStorage.getItem('language', (err, lng) => {
//       // Error fetching stored data or no language was stored
//       if (err || !lng) {
//         if (err) {
//           Alert.alert('Error fetching "APP_LANG" from async store', err);
//         } else {
//           Alert.alert(
//             'No language is set, choosing the best available or English as fallback',
//           );
//         }

//         callback(defaultLanguage);
//         return;
//       }
//       // console.log('languageDetector: ' + lng);
//       callback(lng);
//     });
//   },
//   cacheUserLanguage: lng => {
//     AsyncStorage.setItem('language', lng);
//   },
// };

i18n
  .use(initReactI18next)
  // .use(languageDetector)
  .init({
    resources,
    //language to use if translations in user language are not available
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
