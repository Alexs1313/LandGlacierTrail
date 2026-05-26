import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {atmosphereBackdrop} from '../assets/visualRegistry';
import {SavedRowItem} from '../components/SavedRowItem';
import {formationCatalog} from '../data/formationCatalog';
import {useBookmarks} from '../hooks/useBookmarks';
import type {MainTabParamList} from '../navigation/MainTabNavigator';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {fontFamily, typographyMold} from '../palette/typographyMold';

const TAB_BAR_SPACER = 100;

export function SavedScreen() {
  const navigation =
    useNavigation<BottomTabNavigationProp<MainTabParamList, 'SavedTab'>>();
  const {bookmarkedKeys, toggleBookmark} = useBookmarks();

  const savedLocations = formationCatalog.filter(location =>
    bookmarkedKeys.includes(location.entryKey),
  );

  const isEmpty = savedLocations.length === 0;

  const openLocation = (entryKey: string) => {
    navigation.navigate('ExploreTab', {
      screen: 'FormationDetail',
      params: {entryKey},
    });
  };

  return (
    <View style={styles.screen}>
      {isEmpty ? (
        <ImageBackground
          source={atmosphereBackdrop}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
      ) : null}

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.content, isEmpty && styles.contentEmpty]}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>MY COLLECTION</Text>
        <Text style={styles.title}>Saved</Text>

        {isEmpty ? (
          <View style={styles.empty}>
            <View style={styles.emptyIcon}>
              <Image source={require('../../assets/images/nosaved.png')} />
            </View>
            <Text style={styles.emptyTitle}>No Saved Places Yet</Text>
            <Text style={styles.emptyText}>
              Explore locations and tap the bookmark icon to save your favorites
              here.
            </Text>
          </View>
        ) : (
          <View style={styles.list}>
            {savedLocations.map(location => (
              <SavedRowItem
                key={location.entryKey}
                entry={location}
                onPress={() => openLocation(location.entryKey)}
                onRemovePress={() => toggleBookmark(location.entryKey)}
              />
            ))}
          </View>
        )}

        <View style={styles.tabBarSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: chromaVault.surfacePrimary,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingTop: spacingLattice.screenTop,
    paddingHorizontal: spacingLattice.unitXl,
    paddingBottom: spacingLattice.unit3xl,
  },
  contentEmpty: {
    flexGrow: 1,
  },
  eyebrow: {
    ...typographyMold.labelCaps,
    marginBottom: spacingLattice.unitXs,
  },
  title: {
    ...typographyMold.headingDisplay,
    marginBottom: spacingLattice.unitLg,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacingLattice.unit3xl,
    paddingHorizontal: spacingLattice.unitSm,
  },
  emptyIcon: {
    width: 100,
    height: 100,
    marginBottom: spacingLattice.unit2xl,
    backgroundColor: chromaVault.surfaceGlassLight,
    borderWidth: 1,
    borderColor: chromaVault.surfacePrimary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    lineHeight: 30,
    color: chromaVault.surfacePrimary,
    textAlign: 'center',
    marginBottom: spacingLattice.unitMd,
  },
  emptyText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 22.4,
    color: chromaVault.textOnboard,
    textAlign: 'center',
    maxWidth: 310,
  },
  list: {
    gap: spacingLattice.unitMd,
    paddingTop: spacingLattice.unitSm,
  },
  tabBarSpacer: {
    height: TAB_BAR_SPACER,
  },
});
