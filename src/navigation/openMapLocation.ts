import {
  CommonActions,
  type NavigationProp,
  type ParamListBase,
} from '@react-navigation/native';

const glacierMapRoute = (entryKey: string) => ({
  name: 'GlacierMap' as const,
  params: {entryKey},
});

export function openMapLocation(
  navigation: NavigationProp<ParamListBase>,
  entryKey: string,
) {
  const mapStack = navigation.getParent();
  const mapStackRoutes = mapStack?.getState()?.routeNames ?? [];

  if (mapStackRoutes.includes('GlacierMap')) {
    mapStack?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [glacierMapRoute(entryKey)],
      }),
    );
    return;
  }

  navigation.dispatch(
    CommonActions.navigate({
      name: 'MapTab',
      params: {
        state: {
          index: 0,
          routes: [glacierMapRoute(entryKey)],
        },
      },
    }),
  );
}
