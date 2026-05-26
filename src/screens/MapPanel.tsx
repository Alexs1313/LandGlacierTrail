import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MapView, {Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {FilterPill} from '../components/FilterPill';
import {MapGlacierMarker} from '../components/MapGlacierMarker';
import {MapSelectionPanel} from '../components/MapSelectionPanel';
import {
  filterBySegment,
  filterSegments,
  formationCatalog,
  getPriorityEntry,
  resolveEntryByKey,
} from '../data/formationCatalog';
import type {MapStackParamList} from '../navigation/MapStackNavigator';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';
import type {FilterSegment, FormationEntry} from '../types/entrySchema';

type Props = StackScreenProps<MapStackParamList, 'GlacierMap'>;

const ICELAND_REGION: Region = {
  latitude: 64.75,
  longitude: -18.5,
  latitudeDelta: 7.8,
  longitudeDelta: 14.5,
};

const FOCUS_DELTA = {
  latitudeDelta: 1.8,
  longitudeDelta: 2.4,
};

const MARKER_SNAPSHOT_MS = 600;

const priorityLocation = getPriorityEntry();

export function MapPanel({navigation, route}: Props) {
  const mapRef = useRef<MapView>(null);
  const [segment, setSegment] = useState<FilterSegment>('all');
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [refreshMarkers, setRefreshMarkers] = useState(true);

  const visibleLocations = useMemo(
    () => filterBySegment(formationCatalog, segment),
    [segment],
  );

  const selectedLocation = useMemo(() => {
    if (!selectedKey) {
      return undefined;
    }
    return (
      resolveEntryByKey(selectedKey) ??
      visibleLocations.find(item => item.entryKey === selectedKey)
    );
  }, [selectedKey, visibleLocations]);

  useEffect(() => {
    setRefreshMarkers(true);
    const timer = setTimeout(
      () => setRefreshMarkers(false),
      MARKER_SNAPSHOT_MS,
    );
    return () => clearTimeout(timer);
  }, [selectedKey, segment]);

  useEffect(() => {
    if (
      selectedKey &&
      !visibleLocations.some(item => item.entryKey === selectedKey)
    ) {
      setSelectedKey(null);
    }
  }, [selectedKey, visibleLocations]);

  const focusLocation = useCallback((location: FormationEntry) => {
    setSelectedKey(location.entryKey);
    mapRef.current?.animateToRegion(
      {
        latitude: location.latitude,
        longitude: location.longitude,
        ...FOCUS_DELTA,
      },
      320,
    );
  }, []);

  const focusLocationByKey = useCallback(
    (entryKey: string) => {
      const location = resolveEntryByKey(entryKey);
      if (!location) {
        return;
      }
      setSegment('all');
      focusLocation(location);
    },
    [focusLocation],
  );

  useFocusEffect(
    useCallback(() => {
      const entryKey = route.params?.entryKey;
      if (entryKey) {
        focusLocationByKey(entryKey);
      }
    }, [route.params?.entryKey, focusLocationByKey]),
  );

  const closePanel = () => {
    setSelectedKey(null);
    mapRef.current?.animateToRegion(ICELAND_REGION, 280);
  };

  const openDetails = () => {
    if (!selectedLocation) {
      return;
    }
    navigation.navigate('FormationDetail', {
      entryKey: selectedLocation.entryKey,
    });
  };

  return (
    <View style={styles.screen}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
        initialRegion={ICELAND_REGION}
        mapType={Platform.OS === 'ios' ? 'mutedStandard' : 'standard'}
        userInterfaceStyle="dark"
        showsCompass={false}
        showsScale={false}
        showsBuildings={false}
        showsTraffic={false}
        showsPointsOfInterest={false}
        showsIndoors={false}
        rotateEnabled={false}
        pitchEnabled={false}>
        {visibleLocations.map(location => {
          const isSelected = selectedKey === location.entryKey;
          const isPriority =
            location.entryKey === priorityLocation.entryKey && !isSelected;

          return (
            <Marker
              key={location.entryKey}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              onPress={() => focusLocation(location)}
              tracksViewChanges={refreshMarkers}
              anchor={{x: 0.5, y: 1}}
              zIndex={isSelected ? 10 : isPriority ? 5 : 1}>
              <MapGlacierMarker
                isSelected={isSelected}
                isPriority={isPriority}
                label={isSelected ? location.displayLabel : undefined}
              />
            </Marker>
          );
        })}
      </MapView>

      <LinearGradient
        colors={[
          'rgba(4, 9, 15, 0.97)',
          'rgba(4, 9, 15, 0.85)',
          'rgba(4, 9, 15, 0)',
        ]}
        locations={[0, 0.55, 1]}
        style={styles.header}
        pointerEvents="box-none">
        <View style={styles.headerContent}>
          <Text style={styles.title}>Glacier Map</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filters}>
            {filterSegments.map(filter => (
              <FilterPill
                key={filter.segmentKey}
                label={filter.segmentLabel}
                isActive={segment === filter.segmentKey}
                onPress={() => setSegment(filter.segmentKey)}
              />
            ))}
          </ScrollView>
        </View>
      </LinearGradient>

      {selectedLocation ? (
        <View style={styles.panel}>
          <MapSelectionPanel
            entry={selectedLocation}
            onClose={closePanel}
            onViewDetails={openDetails}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#04090F',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerContent: {
    paddingTop: spacingLattice.screenTop,
    paddingHorizontal: spacingLattice.unitXl,
    paddingBottom: spacingLattice.unit2xl,
  },
  title: {
    ...typographyMold.headingCard,
    fontSize: 22,
    lineHeight: 33,
    marginBottom: spacingLattice.unitMd,
  },
  filters: {
    paddingRight: spacingLattice.unitXl,
  },
  panel: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
