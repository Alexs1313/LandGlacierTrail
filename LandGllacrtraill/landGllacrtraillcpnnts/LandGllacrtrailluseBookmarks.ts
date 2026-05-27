import {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  readSelectedItems,
  toggleSelectedItem,
} from './LandGllacrtraillpersistenceGate';

export function useBookmarks() {
  const [bookmarkedKeys, setBookmarkedKeys] = useState<string[]>([]);

  const reload = useCallback(async () => {
    setBookmarkedKeys(await readSelectedItems());
  }, []);

  useFocusEffect(
    useCallback(() => {
      reload();
    }, [reload]),
  );

  const isBookmarked = useCallback(
    (entryKey: string) => bookmarkedKeys.includes(entryKey),
    [bookmarkedKeys],
  );

  const toggleBookmark = useCallback(
    async (entryKey: string) => {
      await toggleSelectedItem(entryKey);
      await reload();
    },
    [reload],
  );

  return {bookmarkedKeys, isBookmarked, toggleBookmark, reload};
}
