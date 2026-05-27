import type {NavigationProp, ParamListBase} from '@react-navigation/native';

export function LandGllacrtraillopenMapLocation(
  navigation: NavigationProp<ParamListBase>,
  entryKey: string,
) {
  navigation.navigate(
    'MainTabs' as never,
    {
      screen: 'MapTab',
      params: {entryKey},
    } as never,
  );
}
