import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ExploreScreen} from '../screens/ExploreScreen';
import {FormationDetailScreen} from '../screens/FormationDetailScreen';

export type ExploreStackParamList = {
  Discover: undefined;
  FormationDetail: {entryKey: string};
};

const Stack = createStackNavigator<ExploreStackParamList>();

export function ExploreStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Discover" component={ExploreScreen} />
      <Stack.Screen name="FormationDetail" component={FormationDetailScreen} />
    </Stack.Navigator>
  );
}
