import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {LandGllacrtraillLoaderScreen} from '../landGllacrtraillscrnn/LandGllacrtraillLoaderScreen';
import {LandGllacrtraillOnboardingScreen} from '../landGllacrtraillscrnn/LandGllacrtraillOnboardingScreen';
import {LandGllacrtraillMainTabNavigator} from './LandGllacrtraillMainTabNavigator';
import {LandGllacrtraillFormationDetailScreen} from '../landGllacrtraillscrnn/LandGllacrtraillFormationDetailScreen';
import {LandGllacrtraillGuideArticleScreen} from '../landGllacrtraillscrnn/LandGllacrtraillGuideArticleScreen';
import {LandGllacrtraillGuideSafetyScreen} from '../landGllacrtraillscrnn/LandGllacrtraillGuideSafetyScreen';
import type {RootStackParamList} from './LandGllacrtrailltypes';

const Stack = createStackNavigator<RootStackParamList>();

type IntroProps = {
  navigation: StackNavigationProp<RootStackParamList, 'IntroFlow'>;
};

function IntroFlowScreen({navigation}: IntroProps) {
  const landGllacrtraillEnterMain = () => navigation.replace('MainTabs');

  return <LandGllacrtraillOnboardingScreen onComplete={landGllacrtraillEnterMain} />;
}

export function LandGllacrtraillMainRoutesStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loader"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Loader" component={LandGllacrtraillLoaderScreen} />
        <Stack.Screen name="IntroFlow" component={IntroFlowScreen} />
        <Stack.Screen name="MainTabs" component={LandGllacrtraillMainTabNavigator} />

        <Stack.Screen
          name="FormationDetail"
          component={LandGllacrtraillFormationDetailScreen}
        />
        <Stack.Screen name="GuideArticle" component={LandGllacrtraillGuideArticleScreen} />
        <Stack.Screen name="GuideSafety" component={LandGllacrtraillGuideSafetyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
