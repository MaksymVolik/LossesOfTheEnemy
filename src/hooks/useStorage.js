import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = () => {
  const getData = async (key, defaultValue = '') => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        return value;
      }
      return defaultValue;
    } catch (e) {
      throw e;
    }
  };

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      throw e;
    }
  };
  return {getData, storeData};
};
