import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {MainTabParamList} from './LandGllacrtrailltypes';

import {LandGllacrtraillGlobalNavigation} from '../landGllacrtraillcpnnts/LandGllacrtraillGlobalNavigation';
import {LandGllacrtraillExploreScreen} from '../landGllacrtraillscrnn/LandGllacrtraillExploreScreen';
import {LandGllacrtraillMapPanel} from '../landGllacrtraillscrnn/LandGllacrtraillMapPanel';
import {LandGllacrtraillRevealPanel} from '../landGllacrtraillscrnn/LandGllacrtraillRevealPanel';
import {LandGllacrtraillNotesPanel} from '../landGllacrtraillscrnn/LandGllacrtraillNotesPanel';
import {LandGllacrtraillSavedScreen} from '../landGllacrtraillscrnn/LandGllacrtraillSavedScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function LandGllacrtraillMainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <LandGllacrtraillGlobalNavigation {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="ExploreTab" component={LandGllacrtraillExploreScreen} />
      <Tab.Screen name="MapTab" component={LandGllacrtraillMapPanel} />
      <Tab.Screen name="RevealTab" component={LandGllacrtraillRevealPanel} />
      <Tab.Screen name="NotesTab" component={LandGllacrtraillNotesPanel} />
      <Tab.Screen name="SavedTab" component={LandGllacrtraillSavedScreen} />
    </Tab.Navigator>
  );
}
