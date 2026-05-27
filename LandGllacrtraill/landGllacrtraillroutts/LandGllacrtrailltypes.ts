import type {NavigatorScreenParams} from '@react-navigation/native';

export type MainTabParamList = {
  ExploreTab: undefined;
  MapTab: {entryKey?: string} | undefined;
  RevealTab: undefined;
  NotesTab: undefined;
  SavedTab: undefined;
};

export type RootStackParamList = {
  Loader: undefined;
  IntroFlow: undefined;
  MainTabs: NavigatorScreenParams<MainTabParamList> | undefined;

  // Detail / guide (живут в корневом stack, вне табов)
  FormationDetail: {entryKey: string};
  GuideArticle: {articleKey: string};
  GuideSafety: {safetyKey: string};
};

