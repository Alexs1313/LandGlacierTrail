import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {tabGlyphRegistry, TabRouteKey} from './LandGllacrtraillvisualRegistry';

const landGllacrtraillTabMeta: Record<TabRouteKey, {label: string}> = {
  ExploreTab: {label: 'Explore'},
  MapTab: {label: 'Map'},
  RevealTab: {label: 'Ice Reveal'},
  NotesTab: {label: 'Notes'},
  SavedTab: {label: 'Saved'},
};

export function LandGllacrtraillGlobalNavigation({state, navigation}: BottomTabBarProps) {
  const landGllacrtraillActiveRoute = state.routes[state.index];
  const landGllacrtraillActiveStackState = landGllacrtraillActiveRoute?.state;
  const landGllacrtraillActiveNestedRoute =
    landGllacrtraillActiveStackState && landGllacrtraillActiveStackState.index !== undefined
      ? landGllacrtraillActiveStackState.routes[landGllacrtraillActiveStackState.index]?.name
      : undefined;

  const landGllacrtraillHideTabBarOnDetail =
    (landGllacrtraillActiveRoute?.name === 'ExploreTab' ||
      landGllacrtraillActiveRoute?.name === 'MapTab' ||
      landGllacrtraillActiveRoute?.name === 'RevealTab') &&
    landGllacrtraillActiveNestedRoute === 'FormationDetail';

  const landGllacrtraillHideTabBarOnGuide =
    landGllacrtraillActiveRoute?.name === 'NotesTab' &&
    (landGllacrtraillActiveNestedRoute === 'GuideArticle' ||
      landGllacrtraillActiveNestedRoute === 'GuideSafety');

  if (landGllacrtraillHideTabBarOnDetail || landGllacrtraillHideTabBarOnGuide) {
    return null;
  }

  return (
    <View
      style={[
        styles.landGllacrtraillBar,
        {
          height: 90,
        },
      ]}>
      {state.routes.map((route, index) => {
        const landGllacrtraillIsFocused = state.index === index;
        const landGllacrtraillRouteKey = route.name as TabRouteKey;
        const landGllacrtraillMeta = landGllacrtraillTabMeta[landGllacrtraillRouteKey] ?? {label: route.name};
        const landGllacrtraillGlyphSource = tabGlyphRegistry[landGllacrtraillRouteKey];

        const onPress = () => {
          const landGllacrtraillEvent = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!landGllacrtraillIsFocused && !landGllacrtraillEvent.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={styles.landGllacrtraillTab}
            accessibilityRole="button"
            accessibilityState={landGllacrtraillIsFocused ? {selected: true} : {}}>
            {landGllacrtraillIsFocused ? (
              <View style={styles.landGllacrtraillActiveOrb}>
                <Image source={landGllacrtraillGlyphSource} resizeMode="contain" />
              </View>
            ) : (
              <View style={styles.landGllacrtraillGlyphSlot}>
                <Image
                  source={landGllacrtraillGlyphSource}
                  style={styles.landGllacrtraillGlyphIdle}
                  resizeMode="contain"
                />
              </View>
            )}
            <Text style={[styles.label, landGllacrtraillIsFocused && styles.landGllacrtraillLabelActive]}>
              {landGllacrtraillMeta.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillBar: {
    flexDirection: 'row',
    backgroundColor: '#060F1E',
    borderTopWidth: 1,
    borderTopColor: 'rgba(61, 184, 240, 0.12)',
    alignItems: 'center',
    paddingBottom: 20,
  },
  landGllacrtraillTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  landGllacrtraillGlyphSlot: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  landGllacrtraillGlyphIdle: {
    opacity: 0.55,
  },
  landGllacrtraillActiveOrb: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 10,
    top: -4,
    fontFamily: 'BarlowCondensed-Regular',
    color: 'rgba(168, 212, 236, 0.6)',
  },
  landGllacrtraillLabelActive: {
    color: '#3DB8F0',
  },
});
