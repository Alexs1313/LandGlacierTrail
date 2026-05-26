import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GlobalNavigation} from '../components/GlobalNavigation';
import {
  ExploreStackNavigator,
  ExploreStackParamList,
} from './ExploreStackNavigator';
import {MapStackNavigator, MapStackParamList} from './MapStackNavigator';
import {NotesStackNavigator} from './NotesStackNavigator';
import {RevealStackNavigator} from './RevealStackNavigator';
import {SavedScreen} from '../screens/SavedScreen';

export type MainTabParamList = {
  ExploreTab: NavigatorScreenParams<ExploreStackParamList>;
  MapTab: NavigatorScreenParams<MapStackParamList>;
  RevealTab: undefined;
  NotesTab: undefined;
  SavedTab: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <GlobalNavigation {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="ExploreTab" component={ExploreStackNavigator} />
      <Tab.Screen name="MapTab" component={MapStackNavigator} />
      <Tab.Screen name="RevealTab" component={RevealStackNavigator} />
      <Tab.Screen name="NotesTab" component={NotesStackNavigator} />
      <Tab.Screen name="SavedTab" component={SavedScreen} />
    </Tab.Navigator>
  );
}
