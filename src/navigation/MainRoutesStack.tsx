import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {LoaderScreen} from '../screens/LoaderScreen';
import {OnboardingScreen} from '../screens/OnboardingScreen';
import {MainTabNavigator} from './MainTabNavigator';

export type RootStackParamList = {
  Loader: undefined;
  IntroFlow: undefined;
  MainTabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type IntroProps = {
  navigation: StackNavigationProp<RootStackParamList, 'IntroFlow'>;
};

function IntroFlowScreen({navigation}: IntroProps) {
  const enterMain = () => navigation.replace('MainTabs');

  return <OnboardingScreen onComplete={enterMain} />;
}

export function MainRoutesStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loader"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Loader" component={LoaderScreen} />
        <Stack.Screen name="IntroFlow" component={IntroFlowScreen} />
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
