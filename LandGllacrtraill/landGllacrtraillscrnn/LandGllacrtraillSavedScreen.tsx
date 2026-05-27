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
import type {StackNavigationProp} from '@react-navigation/stack';
import {atmosphereBackdrop} from '../landGllacrtraillcpnnts/LandGllacrtraillvisualRegistry';
import {LandGllacrtraillSavedRowItem} from '../landGllacrtraillcpnnts/LandGllacrtraillSavedRowItem';
import {formationCatalog} from '../landGllacrtraillcpnnts/LandGllacrtraillformationCatalog';
import {useBookmarks} from '../landGllacrtraillcpnnts/LandGllacrtrailluseBookmarks';
import type {RootStackParamList} from '../landGllacrtraillroutts/LandGllacrtrailltypes';
import {
  typographyMold,
} from '../landGllacrtraillcpnnts/LandGllacrtrailltypographyMold';

const TAB_BAR_SPACER = 100;

export function LandGllacrtraillSavedScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {bookmarkedKeys, toggleBookmark} = useBookmarks();

  const landGllacrtraillSavedLocations = formationCatalog.filter(location =>
    bookmarkedKeys.includes(location.entryKey),
  );

  const landGllacrtraillIsEmpty = landGllacrtraillSavedLocations.length === 0;

  const landGllacrtraillOpenLocation = (entryKey: string) => {
    navigation.navigate('FormationDetail', {entryKey});
  };

  return (
    <View style={styles.screen}>
      {landGllacrtraillIsEmpty ? (
        <ImageBackground
          source={atmosphereBackdrop}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
      ) : null}

      <ScrollView
        style={styles.landGllacrtraillScroll}
        contentContainerStyle={[styles.landGllacrtraillContent, landGllacrtraillIsEmpty && styles.landGllacrtraillContentEmpty]}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.landGllacrtraillEyebrow}>MY COLLECTION</Text>
        <Text style={styles.landGllacrtraillTitle}>Saved</Text>

        {landGllacrtraillIsEmpty ? (
          <View style={styles.landGllacrtraillEmpty}>
            <View style={styles.landGllacrtraillEmptyIcon}>
              <Image source={require('../../assets/images/nosaved.png')} />
            </View>
            <Text style={styles.landGllacrtraillEmptyTitle}>No Saved Places Yet</Text>
            <Text style={styles.landGllacrtraillEmptyText}>
              Explore locations and tap the bookmark icon to save your favorites
              here.
            </Text>
          </View>
        ) : (
          <View style={styles.landGllacrtraillList}>
            {landGllacrtraillSavedLocations.map(location => (
              <LandGllacrtraillSavedRowItem
                key={location.entryKey}
                entry={location}
                onPress={() => landGllacrtraillOpenLocation(location.entryKey)}
                onRemovePress={() => toggleBookmark(location.entryKey)}
              />
            ))}
          </View>
        )}

        <View style={styles.landGllacrtraillTabBarSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#060F1E',
  },
  landGllacrtraillScroll: {
    flex: 1,
  },
  landGllacrtraillContent: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  landGllacrtraillContentEmpty: {
    flexGrow: 1,
  },
  landGllacrtraillEyebrow: {
    ...typographyMold.labelCaps,
    marginBottom: 4.2,
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingDisplay,
    marginBottom: 16,
  },
  landGllacrtraillEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 8,
  },
  landGllacrtraillEmptyIcon: {
    width: 100,
    height: 100,
    marginBottom: 24,
    backgroundColor: 'rgba(61, 184, 240, 0.12)',
    borderWidth: 1,
    borderColor: '#060F1E',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  landGllacrtraillEmptyTitle: {
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 20,
    lineHeight: 30,
    color: '#060F1E',
    textAlign: 'center',
    marginBottom: 12,
  },
  landGllacrtraillEmptyText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 14,
    lineHeight: 22.4,
    color: '#051E2C',
    textAlign: 'center',
    maxWidth: 310,
  },
  landGllacrtraillList: {
    gap: 12,
    paddingTop: 8,
  },
  landGllacrtraillTabBarSpacer: {
    height: TAB_BAR_SPACER,
  },
});
