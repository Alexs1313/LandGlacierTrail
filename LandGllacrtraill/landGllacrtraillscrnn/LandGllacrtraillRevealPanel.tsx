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
import {LandGllacrtraillGhostActionControl} from '../landGllacrtraillcpnnts/LandGllacrtraillGhostActionControl';
import {LandGllacrtraillPrimaryActionControl} from '../landGllacrtraillcpnnts/LandGllacrtraillPrimaryActionControl';
import {LandGllacrtraillRevealResultCard} from '../landGllacrtraillcpnnts/LandGllacrtraillRevealResultCard';
import {formationCatalog} from '../landGllacrtraillcpnnts/LandGllacrtraillformationCatalog';
import {useBookmarks} from '../landGllacrtraillcpnnts/LandGllacrtrailluseBookmarks';
import type {RootStackParamList} from '../landGllacrtraillroutts/LandGllacrtrailltypes';
import {typographyMold} from '../landGllacrtraillcpnnts/LandGllacrtrailltypographyMold';
import type {FormationEntry} from '../landGllacrtraillcpnnts/LandGllacrtraillentrySchema';

function landGllacrtraillPickSurpriseLocation(
  excludeKey?: string,
): FormationEntry {
  const landGllacrtraillCandidates = excludeKey
    ? formationCatalog.filter(item => item.entryKey !== excludeKey)
    : formationCatalog;
  const landGllacrtraillIndex = Math.floor(
    Math.random() * landGllacrtraillCandidates.length,
  );
  return (
    landGllacrtraillCandidates[landGllacrtraillIndex] ?? formationCatalog[0]
  );
}

export function LandGllacrtraillRevealPanel() {
  const landGllacrtraillStackNavigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();
  const {isBookmarked, toggleBookmark} = useBookmarks();
  const [revealedLocation, setRevealedLocation] =
    useState<FormationEntry | null>(null);

  const landGllacrtraillRevealNext = () => {
    const landGllacrtraillNext = landGllacrtraillPickSurpriseLocation(
      revealedLocation?.entryKey,
    );
    setRevealedLocation(landGllacrtraillNext);
  };

  const landGllacrtraillOpenDetails = () => {
    if (!revealedLocation) {
      return;
    }
    landGllacrtraillStackNavigation.navigate('FormationDetail', {
      entryKey: revealedLocation.entryKey,
    });
  };

  const landGllacrtraillSaved = revealedLocation
    ? isBookmarked(revealedLocation.entryKey)
    : false;

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={atmosphereBackdrop}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />

      <ScrollView
        style={styles.landGllacrtraillScroll}
        contentContainerStyle={styles.landGllacrtraillContent}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.landGllacrtraillEyebrow}>GLACIER DISCOVERY</Text>
        <Text style={styles.landGllacrtraillTitle}>Ice Reveal</Text>

        {revealedLocation ? (
          <View style={styles.landGllacrtraillResult}>
            <LandGllacrtraillRevealResultCard entry={revealedLocation} />
            <LandGllacrtraillPrimaryActionControl
              variant="map"
              label="VIEW FULL DETAILS"
              onPress={landGllacrtraillOpenDetails}
              style={styles.landGllacrtraillDetailsButton}
            />
            <View style={styles.landGllacrtraillActions}>
              <LandGllacrtraillGhostActionControl
                label="Save"
                icon={landGllacrtraillSaved ? '★' : '☆'}
                onPress={() => toggleBookmark(revealedLocation.entryKey)}
                isHighlighted={landGllacrtraillSaved}
              />
              <LandGllacrtraillGhostActionControl
                label="Show another"
                icon="↻"
                onPress={landGllacrtraillRevealNext}
              />
            </View>
          </View>
        ) : (
          <View style={styles.landGllacrtraillIntro}>
            <View style={styles.landGllacrtraillSnowOrb}>
              <View style={styles.landGllacrtraillSnowOrbHighlight} />
              <Text style={styles.landGllacrtraillSnowOrbIcon}>❄</Text>
            </View>
            <Text style={styles.landGllacrtraillIntroTitle}>
              Let the Ice Decide
            </Text>
            <Text style={styles.landGllacrtraillIntroText}>
              Tap below to reveal a new glacier destination and begin your
              expedition.
            </Text>
            <LandGllacrtraillPrimaryActionControl
              variant="map"
              label="REVEAL DESTINATION"
              leadingIcon="❄"
              onPress={landGllacrtraillRevealNext}
              style={styles.landGllacrtraillRevealButton}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  landGllacrtraillScroll: {
    flex: 1,
  },
  landGllacrtraillContent: {
    paddingTop: 60,
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  landGllacrtraillEyebrow: {
    ...typographyMold.labelCaps,
    letterSpacing: 1.2,
    marginBottom: 4.2,
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingDisplay,
    marginBottom: 24,
  },
  landGllacrtraillIntro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  landGllacrtraillSnowOrb: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: 'rgba(61, 184, 240, 0.12)',
    shadowColor: '#3DB8F0',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.18,
    shadowRadius: 30,
    elevation: 4,
  },
  landGllacrtraillSnowOrbHighlight: {
    position: 'absolute',
    width: 48,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    top: 36,
  },
  landGllacrtraillSnowOrbIcon: {
    fontSize: 54,
    color: '#7AD4F5',
  },
  landGllacrtraillIntroTitle: {
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 24,
    lineHeight: 36,
    color: '#051E2C',
    textAlign: 'center',
    marginBottom: 12,
  },
  landGllacrtraillIntroText: {
    ...typographyMold.bodyOnboard,
    textAlign: 'center',
    width: '100%',
    marginBottom: 24,
  },
  landGllacrtraillRevealButton: {
    alignSelf: 'center',
    width: '78%',
  },
  landGllacrtraillResult: {
    gap: 16,
  },
  landGllacrtraillDetailsButton: {
    width: '100%',
  },
  landGllacrtraillActions: {
    flexDirection: 'row',
    gap: 12,
  },
});
