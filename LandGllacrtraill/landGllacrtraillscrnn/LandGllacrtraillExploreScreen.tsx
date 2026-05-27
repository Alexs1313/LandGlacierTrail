import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {atmosphereBackdrop} from '../landGllacrtraillcpnnts/LandGllacrtraillvisualRegistry';
import {LandGllacrtraillDiscoveryCardLarge} from '../landGllacrtraillcpnnts/LandGllacrtraillDiscoveryCardLarge';
import {LandGllacrtraillFilterPill} from '../landGllacrtraillcpnnts/LandGllacrtraillFilterPill';
import {LandGllacrtraillLocationRowItem} from '../landGllacrtraillcpnnts/LandGllacrtraillLocationRowItem';
import {
  filterBySegment,
  filterSegments,
  formationCatalog,
  getPriorityEntry,
} from '../landGllacrtraillcpnnts/LandGllacrtraillformationCatalog';
import {useBookmarks} from '../landGllacrtraillcpnnts/LandGllacrtrailluseBookmarks';
import type {RootStackParamList} from '../landGllacrtraillroutts/LandGllacrtrailltypes';
import {typographyMold} from '../landGllacrtraillcpnnts/LandGllacrtrailltypographyMold';
import type {FilterSegment} from '../landGllacrtraillcpnnts/LandGllacrtraillentrySchema';

const landGllacrtraillFeaturedEntry = getPriorityEntry();

export function LandGllacrtraillExploreScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [segment, setSegment] = useState<FilterSegment>('all');
  const {isBookmarked, toggleBookmark} = useBookmarks();

  const landGllacrtraillFilteredLocations = filterBySegment(formationCatalog, segment);

  const landGllacrtraillShowFeatured =
    segment === 'all' ||
    landGllacrtraillFilteredLocations.some(item => item.entryKey === landGllacrtraillFeaturedEntry.entryKey);

  const landGllacrtraillListLocations = landGllacrtraillShowFeatured
    ? landGllacrtraillFilteredLocations.filter(item => item.entryKey !== landGllacrtraillFeaturedEntry.entryKey)
    : landGllacrtraillFilteredLocations;

  const landGllacrtraillHandleOpenLocation = (entryKey: string) => {
    navigation.navigate('FormationDetail', {entryKey});
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={atmosphereBackdrop}
        style={StyleSheet.absoluteFill}
      />

      <ScrollView
        style={styles.landGllacrtraillScroll}
        contentContainerStyle={styles.landGllacrtraillContent}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.landGllacrtraillEyebrow}>ICELAND GLACIER TRAIL</Text>
        <Text style={styles.landGllacrtraillTitle}>Discover</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.landGllacrtraillFilters}
          contentContainerStyle={styles.landGllacrtraillFiltersContent}>
          {filterSegments.map(filter => (
            <LandGllacrtraillFilterPill
              key={filter.segmentKey}
              label={filter.segmentLabel}
              isActive={segment === filter.segmentKey}
              onPress={() => setSegment(filter.segmentKey)}
            />
          ))}
        </ScrollView>

        {landGllacrtraillShowFeatured ? (
          <View style={styles.landGllacrtraillFeatured}>
            <View style={styles.landGllacrtraillFeaturedHeader}>
              <Text style={styles.landGllacrtraillSectionTitle}>Featured</Text>
              <Text style={styles.landGllacrtraillSectionAction}>See all</Text>
            </View>
            <LandGllacrtraillDiscoveryCardLarge
              entry={landGllacrtraillFeaturedEntry}
              onPress={() => landGllacrtraillHandleOpenLocation(landGllacrtraillFeaturedEntry.entryKey)}
            />
          </View>
        ) : null}

        <Text style={[styles.landGllacrtraillSectionTitle, styles.landGllacrtraillListTitle]}>
          All Locations
        </Text>

        <View style={styles.landGllacrtraillList}>
          {landGllacrtraillListLocations.map(location => (
            <LandGllacrtraillLocationRowItem
              key={location.entryKey}
              entry={location}
              isMarked={isBookmarked(location.entryKey)}
              onPress={() => landGllacrtraillHandleOpenLocation(location.entryKey)}
              onMarkPress={() => toggleBookmark(location.entryKey)}
            />
          ))}
        </View>

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
  landGllacrtraillEyebrow: {
    ...typographyMold.labelCaps,
    marginBottom: 4.2,
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingDisplay,
    marginBottom: 16,
  },
  landGllacrtraillFilters: {
    marginBottom: 16,
    marginHorizontal: -20,
  },
  landGllacrtraillFiltersContent: {
    paddingHorizontal: 20,
  },
  landGllacrtraillFeatured: {
    gap: 12,
    marginBottom: 16,
  },
  landGllacrtraillFeaturedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  landGllacrtraillSectionTitle: {
    ...typographyMold.headingSection,
  },
  landGllacrtraillSectionAction: {
    ...typographyMold.linkAction,
  },
  landGllacrtraillListTitle: {
    marginBottom: 12,
  },
  landGllacrtraillList: {
    gap: 12,
  },
  landGllacrtraillTabBarSpacer: {
    height: 100,
  },
});
