import {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  readSavedArticles,
  toggleSavedArticle,
} from './LandGllacrtraillpersistenceGate';

export function useArticleBookmarks() {
  const [savedArticleKeys, setSavedArticleKeys] = useState<string[]>([]);

  const reload = useCallback(async () => {
    setSavedArticleKeys(await readSavedArticles());
  }, []);

  useFocusEffect(
    useCallback(() => {
      reload();
    }, [reload]),
  );

  const isArticleSaved = useCallback(
    (articleKey: string) => savedArticleKeys.includes(articleKey),
    [savedArticleKeys],
  );

  const toggleArticleBookmark = useCallback(
    async (articleKey: string) => {
      await toggleSavedArticle(articleKey);
      await reload();
    },
    [reload],
  );

  return {savedArticleKeys, isArticleSaved, toggleArticleBookmark, reload};
}
