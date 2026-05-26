import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {atmosphereBackdrop} from '../assets/visualRegistry';
import {DiscoveryCardLarge} from '../components/DiscoveryCardLarge';
import {FilterPill} from '../components/FilterPill';
import {LocationRowItem} from '../components/LocationRowItem';
import {
  filterBySegment,
  filterSegments,
  formationCatalog,
  getPriorityEntry,
} from '../data/formationCatalog';
import {useBookmarks} from '../hooks/useBookmarks';
import type {ExploreStackParamList} from '../navigation/ExploreStackNavigator';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';
import type {FilterSegment} from '../types/entrySchema';

type Props = StackScreenProps<ExploreStackParamList, 'Discover'>;

const featuredEntry = getPriorityEntry();

export function ExploreScreen({navigation}: Props) {
  const [segment, setSegment] = useState<FilterSegment>('all');
  const {isBookmarked, toggleBookmark} = useBookmarks();

  const filteredLocations = filterBySegment(formationCatalog, segment);

  const showFeatured =
    segment === 'all' ||
    filteredLocations.some(item => item.entryKey === featuredEntry.entryKey);

  const listLocations = showFeatured
    ? filteredLocations.filter(item => item.entryKey !== featuredEntry.entryKey)
    : filteredLocations;

  const handleOpenLocation = (entryKey: string) => {
    navigation.navigate('FormationDetail', {entryKey});
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={atmosphereBackdrop}
        style={StyleSheet.absoluteFill}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>ICELAND GLACIER TRAIL</Text>
        <Text style={styles.title}>Discover</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filters}
          contentContainerStyle={styles.filtersContent}>
          {filterSegments.map(filter => (
            <FilterPill
              key={filter.segmentKey}
              label={filter.segmentLabel}
              isActive={segment === filter.segmentKey}
              onPress={() => setSegment(filter.segmentKey)}
            />
          ))}
        </ScrollView>

        {showFeatured ? (
          <View style={styles.featured}>
            <View style={styles.featuredHeader}>
              <Text style={styles.sectionTitle}>Featured</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <DiscoveryCardLarge
              entry={featuredEntry}
              onPress={() => handleOpenLocation(featuredEntry.entryKey)}
            />
          </View>
        ) : null}

        <Text style={[styles.sectionTitle, styles.listTitle]}>
          All Locations
        </Text>

        <View style={styles.list}>
          {listLocations.map(location => (
            <LocationRowItem
              key={location.entryKey}
              entry={location}
              isMarked={isBookmarked(location.entryKey)}
              onPress={() => handleOpenLocation(location.entryKey)}
              onMarkPress={() => toggleBookmark(location.entryKey)}
            />
          ))}
        </View>

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
  eyebrow: {
    ...typographyMold.labelCaps,
    marginBottom: spacingLattice.unitXs,
  },
  title: {
    ...typographyMold.headingDisplay,
    marginBottom: spacingLattice.unitLg,
  },
  filters: {
    marginBottom: spacingLattice.unitLg,
    marginHorizontal: -spacingLattice.unitXl,
  },
  filtersContent: {
    paddingHorizontal: spacingLattice.unitXl,
  },
  featured: {
    gap: spacingLattice.unitMd,
    marginBottom: spacingLattice.unitLg,
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    ...typographyMold.headingSection,
  },
  sectionAction: {
    ...typographyMold.linkAction,
  },
  listTitle: {
    marginBottom: spacingLattice.unitMd,
  },
  list: {
    gap: spacingLattice.unitMd,
  },
  tabBarSpacer: {
    height: 100,
  },
});
