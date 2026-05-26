import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GuideArticleScreen} from '../screens/GuideArticleScreen';
import {GuideSafetyScreen} from '../screens/GuideSafetyScreen';
import {NotesPanel} from '../screens/NotesPanel';

export type NotesStackParamList = {
  NotesHome: undefined;
  GuideArticle: {articleKey: string};
  GuideSafety: {safetyKey: string};
};

const Stack = createStackNavigator<NotesStackParamList>();

export function NotesStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NotesHome" component={NotesPanel} />
      <Stack.Screen name="GuideArticle" component={GuideArticleScreen} />
      <Stack.Screen name="GuideSafety" component={GuideSafetyScreen} />
    </Stack.Navigator>
  );
}
