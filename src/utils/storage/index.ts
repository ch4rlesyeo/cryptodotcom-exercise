import AsyncStorage from '@react-native-async-storage/async-storage';

import { EStorageKey, type IStorageSchema } from '@/types/utils/storage';

export const storage = {
  async get<K extends EStorageKey>(key: K): Promise<IStorageSchema[K] | null> {
    const json = await AsyncStorage.getItem(key);

    return json ? (JSON.parse(json) as IStorageSchema[K]) : null;
  },

  async set<K extends EStorageKey>(
    key: K,
    value: IStorageSchema[K]
  ): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },

  async remove<K extends EStorageKey>(key: K): Promise<void> {
    await AsyncStorage.removeItem(key);
  },
};
