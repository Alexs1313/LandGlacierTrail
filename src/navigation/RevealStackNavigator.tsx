import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FormationDetailScreen} from '../screens/FormationDetailScreen';
import {RevealPanel} from '../screens/RevealPanel';

export type RevealStackParamList = {
  IceReveal: undefined;
  FormationDetail: {entryKey: string};
};

const Stack = createStackNavigator<RevealStackParamList>();

export function RevealStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="IceReveal" component={RevealPanel} />
      <Stack.Screen name="FormationDetail" component={FormationDetailScreen} />
    </Stack.Navigator>
  );
}
