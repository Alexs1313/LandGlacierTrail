import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FormationDetailScreen} from '../screens/FormationDetailScreen';
import {MapPanel} from '../screens/MapPanel';

export type MapStackParamList = {
  GlacierMap: {entryKey?: string} | undefined;
  FormationDetail: {entryKey: string};
};

const Stack = createStackNavigator<MapStackParamList>();

export function MapStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GlacierMap" component={MapPanel} />
      <Stack.Screen name="FormationDetail" component={FormationDetailScreen} />
    </Stack.Navigator>
  );
}
