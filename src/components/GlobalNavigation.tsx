import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {tabGlyphRegistry, TabRouteKey} from '../assets/visualRegistry';
import {chromaVault} from '../palette/chromaVault';
import {typographyMold} from '../palette/typographyMold';

const tabMeta: Record<TabRouteKey, {label: string}> = {
  ExploreTab: {label: 'Explore'},
  MapTab: {label: 'Map'},
  RevealTab: {label: 'Ice Reveal'},
  NotesTab: {label: 'Notes'},
  SavedTab: {label: 'Saved'},
};

export function GlobalNavigation({state, navigation}: BottomTabBarProps) {
  const activeRoute = state.routes[state.index];
  const activeStackState = activeRoute?.state;
  const activeNestedRoute =
    activeStackState &&
    activeStackState.index !== undefined
      ? activeStackState.routes[activeStackState.index]?.name
      : undefined;

  const hideTabBarOnDetail =
    (activeRoute?.name === 'ExploreTab' ||
      activeRoute?.name === 'MapTab' ||
      activeRoute?.name === 'RevealTab') &&
    activeNestedRoute === 'FormationDetail';

  const hideTabBarOnGuide =
    activeRoute?.name === 'NotesTab' &&
    (activeNestedRoute === 'GuideArticle' ||
      activeNestedRoute === 'GuideSafety');

  if (hideTabBarOnDetail || hideTabBarOnGuide) {
    return null;
  }

  return (
    <View
      style={[
        styles.bar,
        {
          height: 90,
        },
      ]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const routeKey = route.name as TabRouteKey;
        const meta = tabMeta[routeKey] ?? {label: route.name};
        const glyphSource = tabGlyphRegistry[routeKey];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={styles.tab}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}>
            {isFocused ? (
              <View style={styles.activeOrb}>
                <Image source={glyphSource} resizeMode="contain" />
              </View>
            ) : (
              <View style={styles.glyphSlot}>
                <Image
                  source={glyphSource}
                  style={styles.glyphIdle}
                  resizeMode="contain"
                />
              </View>
            )}
            <Text style={[styles.label, isFocused && styles.labelActive]}>
              {meta.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: chromaVault.surfacePrimary,
    borderTopWidth: 1,
    borderTopColor: chromaVault.accentGlacialBorder,
    alignItems: 'center',
    paddingBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  glyphSlot: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glyphIdle: {
    opacity: 0.55,
  },
  activeOrb: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 10,
    top: -4,
    fontFamily: typographyMold.captionSmall.fontFamily,
    color: chromaVault.textMuted,
  },
  labelActive: {
    color: chromaVault.accentGlacial,
  },
});
