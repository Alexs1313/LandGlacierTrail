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
import {GhostActionControl} from '../components/GhostActionControl';
import {PrimaryActionControl} from '../components/PrimaryActionControl';
import {RevealResultCard} from '../components/RevealResultCard';
import {formationCatalog} from '../data/formationCatalog';
import {useBookmarks} from '../hooks/useBookmarks';
import type {RevealStackParamList} from '../navigation/RevealStackNavigator';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';
import type {FormationEntry} from '../types/entrySchema';

type Props = StackScreenProps<RevealStackParamList, 'IceReveal'>;

function pickSurpriseLocation(excludeKey?: string): FormationEntry {
  const candidates = excludeKey
    ? formationCatalog.filter(item => item.entryKey !== excludeKey)
    : formationCatalog;
  const index = Math.floor(Math.random() * candidates.length);
  return candidates[index] ?? formationCatalog[0];
}

export function RevealPanel({navigation}: Props) {
  const {isBookmarked, toggleBookmark} = useBookmarks();
  const [revealedLocation, setRevealedLocation] = useState<FormationEntry | null>(
    null,
  );

  const revealNext = () => {
    const next = pickSurpriseLocation(revealedLocation?.entryKey);
    setRevealedLocation(next);
  };

  const openDetails = () => {
    if (!revealedLocation) {
      return;
    }
    navigation.navigate('FormationDetail', {
      entryKey: revealedLocation.entryKey,
    });
  };

  const saved = revealedLocation
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
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>SURPRISE DISCOVERY</Text>
        <Text style={styles.title}>Ice Reveal</Text>

        {revealedLocation ? (
          <View style={styles.result}>
            <RevealResultCard entry={revealedLocation} />
            <PrimaryActionControl
              variant="map"
              label="VIEW FULL DETAILS"
              onPress={openDetails}
              style={styles.detailsButton}
            />
            <View style={styles.actions}>
              <GhostActionControl
                label="Save"
                icon={saved ? '★' : '☆'}
                onPress={() => toggleBookmark(revealedLocation.entryKey)}
                isHighlighted={saved}
              />
              <GhostActionControl
                label="Show another"
                icon="↻"
                onPress={revealNext}
              />
            </View>
          </View>
        ) : (
          <View style={styles.intro}>
            <View style={styles.snowOrb}>
              <View style={styles.snowOrbHighlight} />
              <Text style={styles.snowOrbIcon}>❄</Text>
            </View>
            <Text style={styles.introTitle}>Let the Ice Decide</Text>
            <Text style={styles.introText}>
              Tap below to reveal a surprise glacier destination and begin your
              next expedition.
            </Text>
            <PrimaryActionControl
              variant="map"
              label="REVEAL DESTINATION"
              leadingIcon="❄"
              onPress={revealNext}
              style={styles.revealButton}
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
  scroll: {
    flex: 1,
  },
  content: {
    paddingTop: spacingLattice.screenTop,
    paddingBottom: spacingLattice.screenBottomTab,
    paddingHorizontal: spacingLattice.unitXl,
    flexGrow: 1,
  },
  eyebrow: {
    ...typographyMold.labelCaps,
    letterSpacing: 1.2,
    marginBottom: spacingLattice.unitXs,
  },
  title: {
    ...typographyMold.headingDisplay,
    marginBottom: spacingLattice.unit2xl,
  },
  intro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  snowOrb: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacingLattice.unit2xl,
    backgroundColor: chromaVault.surfaceGlassLight,
    shadowColor: chromaVault.accentGlacial,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.18,
    shadowRadius: 30,
    elevation: 4,
  },
  snowOrbHighlight: {
    position: 'absolute',
    width: 48,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    top: 36,
  },
  snowOrbIcon: {
    fontSize: 54,
    color: chromaVault.accentGlacialSoft,
  },
  introTitle: {
    fontFamily: typographyMold.headingDisplay.fontFamily,
    fontSize: 24,
    lineHeight: 36,
    color: chromaVault.textOnboard,
    textAlign: 'center',
    marginBottom: spacingLattice.unitMd,
  },
  introText: {
    ...typographyMold.bodyOnboard,
    textAlign: 'center',
    width: '100%',
    marginBottom: spacingLattice.unit2xl,
  },
  revealButton: {
    alignSelf: 'center',
    width: '78%',
  },
  result: {
    gap: spacingLattice.unitLg,
  },
  detailsButton: {
    width: '100%',
  },
  actions: {
    flexDirection: 'row',
    gap: spacingLattice.unitMd,
  },
});
