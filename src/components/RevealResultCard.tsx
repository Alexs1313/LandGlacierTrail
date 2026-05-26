import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {resolveFormationVisual} from '../assets/visualRegistry';
import {kindDisplayMap} from '../data/formationCatalog';
import type {FormationEntry} from '../types/entrySchema';
import {AssessmentBadge} from './AssessmentBadge';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {fontFamily, typographyMold} from '../palette/typographyMold';

type Props = {
  entry: FormationEntry;
};

export function RevealResultCard({entry}: Props) {
  const visual = resolveFormationVisual(entry.visualAssetKey);
  const kindLabel = kindDisplayMap[entry.formationKind];

  return (
    <View style={styles.card}>
      <ImageBackground source={visual} style={styles.hero} imageStyle={styles.heroImage}>
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(6,15,30,0.95)']}
          locations={[0.45, 1]}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.iceRevealBadge}>
          <Text style={styles.iceRevealText}>❄ ICE REVEAL</Text>
        </View>
        <View style={styles.heroFooter}>
          <View style={styles.kindBadge}>
            <Text style={styles.kindText}>{kindLabel}</Text>
          </View>
          <Text style={styles.title}>{entry.displayLabel}</Text>
          <AssessmentBadge value={entry.assessmentValue} />
        </View>
      </ImageBackground>
      <View style={styles.body}>
        <View style={styles.locationRow}>
          <Text style={styles.locationIcon}>◎</Text>
          <Text style={styles.location}>{entry.sectorLabel}</Text>
        </View>
        <Text style={styles.brief}>{entry.briefNarrative}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: spacingLattice.radiusXl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorderStrong,
    backgroundColor: chromaVault.surfaceCard,
    shadowColor: chromaVault.accentGlacial,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
  hero: {
    height: 230,
    justifyContent: 'flex-end',
  },
  heroImage: {
    borderTopLeftRadius: spacingLattice.radiusXl,
    borderTopRightRadius: spacingLattice.radiusXl,
  },
  iceRevealBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: spacingLattice.radiusPill,
    backgroundColor: chromaVault.surfaceGlassLight,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorderStrong,
  },
  iceRevealText: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    lineHeight: 16.5,
    color: chromaVault.accentGlacialSoft,
  },
  heroFooter: {
    padding: spacingLattice.unitLg,
    gap: spacingLattice.unitXs,
  },
  kindBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: spacingLattice.radiusPill,
    backgroundColor: chromaVault.surfaceKindPill,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorderStrong,
  },
  kindText: {
    ...typographyMold.kindPill,
  },
  title: {
    ...typographyMold.headingDisplay,
    color: chromaVault.textHighEmphasis,
  },
  body: {
    backgroundColor: chromaVault.surfaceCard,
    paddingHorizontal: spacingLattice.unitLg,
    paddingTop: spacingLattice.unitLg,
    paddingBottom: spacingLattice.unitLg,
    gap: spacingLattice.unitSm,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingLattice.unitSm,
  },
  locationIcon: {
    fontSize: 13,
    color: chromaVault.textSector,
  },
  location: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 19.5,
    color: chromaVault.textSector,
  },
  brief: {
    ...typographyMold.bodyNarrative,
  },
});
