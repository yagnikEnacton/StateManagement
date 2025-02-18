import AsyncStorage from '@react-native-async-storage/async-storage';

export const getOneData = async (key: string) => {
  console.log('getOneData');
  try {
    let value = await AsyncStorage.getItem(key);
    if (value != null) value = await JSON.parse(value);
    // getAllData();
    console.log(value);
    return value;
  } catch (e) {
    return null;
  }
};
export const setOneData = async (key: string, data: any) => {
  console.log('setOneData');
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
};
export const updateOneData = async (key: string, data: any) => {
  console.log('updateOneData');
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
};
export const getAllData = async () => {
  console.log('getAllData');
  try {
    const keys = await AsyncStorage.getAllKeys();
    const value = await AsyncStorage.multiGet(keys);
    console.log(JSON.stringify(value));
    return value;
  } catch (e) {
    return null;
  }
};
export const clearData = async () => {
  console.log('clearData');
  try {
    await AsyncStorage.clear();
    return true;
  } catch (e) {
    return false;
  }
};
