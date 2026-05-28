import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MapView, {Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
  type RouteProp,
} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {LandGllacrtraillFilterPill} from '../landGllacrtraillcpnnts/LandGllacrtraillFilterPill';
import {LandGllacrtraillMapGlacierMarker} from '../landGllacrtraillcpnnts/LandGllacrtraillMapGlacierMarker';
import {LandGllacrtraillMapSelectionPanel} from '../landGllacrtraillcpnnts/LandGllacrtraillMapSelectionPanel';
import {
  filterBySegment,
  filterSegments,
  formationCatalog,
  getPriorityEntry,
  resolveEntryByKey,
} from '../landGllacrtraillcpnnts/LandGllacrtraillformationCatalog';
import type {
  MainTabParamList,
  RootStackParamList,
} from '../landGllacrtraillroutts/LandGllacrtrailltypes';
import {typographyMold} from '../landGllacrtraillcpnnts/LandGllacrtrailltypographyMold';
import type {
  FilterSegment,
  FormationEntry,
} from '../landGllacrtraillcpnnts/LandGllacrtraillentrySchema';
import Orientation from 'react-native-orientation-locker';

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

const landGllacrtraillPriorityLocation = getPriorityEntry();

export function LandGllacrtraillMapPanel() {
  const landGllacrtraillStackNavigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<MainTabParamList, 'MapTab'>>();

  const landGllacrtraillMapRef = useRef<MapView>(null);
  const [segment, setSegment] = useState<FilterSegment>('all');
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [refreshMarkers, setRefreshMarkers] = useState(true);

  const landGllacrtraillVisibleLocations = useMemo(
    () => filterBySegment(formationCatalog, segment),
    [segment],
  );

  const landGllacrtraillSelectedLocation = useMemo(() => {
    if (!selectedKey) {
      return undefined;
    }
    return (
      resolveEntryByKey(selectedKey) ??
      landGllacrtraillVisibleLocations.find(
        item => item.entryKey === selectedKey,
      )
    );
  }, [selectedKey, landGllacrtraillVisibleLocations]);

  useEffect(() => {
    setRefreshMarkers(true);
    const landGllacrtraillTimer = setTimeout(
      () => setRefreshMarkers(false),
      MARKER_SNAPSHOT_MS,
    );
    return () => clearTimeout(landGllacrtraillTimer);
  }, [selectedKey, segment]);

  useEffect(() => {
    if (
      selectedKey &&
      !landGllacrtraillVisibleLocations.some(
        item => item.entryKey === selectedKey,
      )
    ) {
      setSelectedKey(null);
    }
  }, [selectedKey, landGllacrtraillVisibleLocations]);

  const landGllacrtraillFocusLocation = useCallback(
    (landGllacrtraillLocation: FormationEntry) => {
      setSelectedKey(landGllacrtraillLocation.entryKey);
      landGllacrtraillMapRef.current?.animateToRegion(
        {
          latitude: landGllacrtraillLocation.latitude,
          longitude: landGllacrtraillLocation.longitude,
          ...FOCUS_DELTA,
        },
        320,
      );
    },
    [],
  );

  const landGllacrtraillFocusLocationByKey = useCallback(
    (entryKey: string) => {
      const landGllacrtraillLocation = resolveEntryByKey(entryKey);
      if (!landGllacrtraillLocation) {
        return;
      }
      setSegment('all');
      landGllacrtraillFocusLocation(landGllacrtraillLocation);
    },
    [landGllacrtraillFocusLocation],
  );

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();

      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const entryKey = route.params?.entryKey;
      if (entryKey) {
        landGllacrtraillFocusLocationByKey(entryKey);
      }
    }, [route.params?.entryKey, landGllacrtraillFocusLocationByKey]),
  );

  const landGllacrtraillClosePanel = () => {
    setSelectedKey(null);
    landGllacrtraillMapRef.current?.animateToRegion(ICELAND_REGION, 280);
  };

  const landGllacrtraillOpenDetails = () => {
    if (!landGllacrtraillSelectedLocation) {
      return;
    }
    landGllacrtraillStackNavigation.navigate('FormationDetail', {
      entryKey: landGllacrtraillSelectedLocation.entryKey,
    });
  };

  return (
    <View style={styles.screen}>
      <MapView
        ref={landGllacrtraillMapRef}
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
        {landGllacrtraillVisibleLocations.map(landGllacrtraillLocation => {
          const isSelected = selectedKey === landGllacrtraillLocation.entryKey;
          const isPriority =
            landGllacrtraillLocation.entryKey ===
              landGllacrtraillPriorityLocation.entryKey && !isSelected;

          return (
            <Marker
              key={landGllacrtraillLocation.entryKey}
              coordinate={{
                latitude: landGllacrtraillLocation.latitude,
                longitude: landGllacrtraillLocation.longitude,
              }}
              onPress={() =>
                landGllacrtraillFocusLocation(landGllacrtraillLocation)
              }
              tracksViewChanges={refreshMarkers}
              anchor={{x: 0.5, y: 1}}
              zIndex={isSelected ? 10 : isPriority ? 5 : 1}>
              {Platform.OS === 'android' ? null : (
                <LandGllacrtraillMapGlacierMarker
                  isSelected={isSelected}
                  isPriority={isPriority}
                  label={
                    isSelected
                      ? landGllacrtraillLocation.displayLabel
                      : undefined
                  }
                />
              )}
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
        style={styles.landGllacrtraillHeader}
        pointerEvents="box-none">
        <View style={styles.landGllacrtraillHeaderContent}>
          <Text style={styles.landGllacrtraillTitle}>Glacier Map</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.landGllacrtraillFilters}>
            {filterSegments.map(filter => (
              <LandGllacrtraillFilterPill
                key={filter.segmentKey}
                label={filter.segmentLabel}
                isActive={segment === filter.segmentKey}
                onPress={() => setSegment(filter.segmentKey)}
              />
            ))}
          </ScrollView>
        </View>
      </LinearGradient>

      {landGllacrtraillSelectedLocation ? (
        <View style={styles.landGllacrtraillPanel}>
          <LandGllacrtraillMapSelectionPanel
            entry={landGllacrtraillSelectedLocation}
            onClose={landGllacrtraillClosePanel}
            onViewDetails={landGllacrtraillOpenDetails}
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
  landGllacrtraillHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  landGllacrtraillHeaderContent: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingCard,
    fontSize: 22,
    lineHeight: 33,
    marginBottom: 12,
  },
  landGllacrtraillFilters: {
    paddingRight: 20,
  },
  landGllacrtraillPanel: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
