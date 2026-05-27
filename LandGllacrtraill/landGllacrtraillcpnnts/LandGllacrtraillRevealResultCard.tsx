import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {resolveFormationVisual} from './LandGllacrtraillvisualRegistry';
import {kindDisplayMap} from './LandGllacrtraillformationCatalog';
import type {FormationEntry} from './LandGllacrtraillentrySchema';
import {LandGllacrtraillAssessmentBadge} from './LandGllacrtraillAssessmentBadge';

import {typographyMold} from './LandGllacrtrailltypographyMold';

type Props = {
  entry: FormationEntry;
};

export function LandGllacrtraillRevealResultCard({entry}: Props) {
  const landGllacrtraillVisual = resolveFormationVisual(entry.visualAssetKey);
  const landGllacrtraillKindLabel = kindDisplayMap[entry.formationKind];

  return (
    <View style={styles.landGllacrtraillCard}>
      <ImageBackground
        source={landGllacrtraillVisual}
        style={styles.landGllacrtraillHero}
        imageStyle={styles.landGllacrtraillHeroImage}>
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(6,15,30,0.95)']}
          locations={[0.45, 1]}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.landGllacrtraillIceRevealBadge}>
          <Text style={styles.landGllacrtraillIceRevealText}>❄ ICE REVEAL</Text>
        </View>
        <View style={styles.landGllacrtraillHeroFooter}>
          <View style={styles.landGllacrtraillKindBadge}>
            <Text style={styles.landGllacrtraillKindText}>{landGllacrtraillKindLabel}</Text>
          </View>
          <Text style={styles.landGllacrtraillTitle}>{entry.displayLabel}</Text>
          <LandGllacrtraillAssessmentBadge value={entry.assessmentValue} />
        </View>
      </ImageBackground>
      <View style={styles.landGllacrtraillBody}>
        <View style={styles.landGllacrtraillLocationRow}>
          <Text style={styles.landGllacrtraillLocationIcon}>◎</Text>
          <Text style={styles.landGllacrtraillLocation}>{entry.sectorLabel}</Text>
        </View>
        <Text style={styles.landGllacrtraillBrief}>{entry.briefNarrative}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillCard: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.25)',
    backgroundColor: '#0D1E35',
    shadowColor: '#3DB8F0',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
  landGllacrtraillHero: {
    height: 230,
    justifyContent: 'flex-end',
  },
  landGllacrtraillHeroImage: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  landGllacrtraillIceRevealBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(61, 184, 240, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.25)',
  },
  landGllacrtraillIceRevealText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 11,
    lineHeight: 16.5,
    color: '#7AD4F5',
  },
  landGllacrtraillHeroFooter: {
    padding: 16,
    gap: 4.2,
  },
  landGllacrtraillKindBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: 'rgba(61, 184, 240, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.25)',
  },
  landGllacrtraillKindText: {
    ...typographyMold.kindPill,
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingDisplay,
    color: '#E8F4FC',
  },
  landGllacrtraillBody: {
    backgroundColor: '#0D1E35',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    gap: 8,
  },
  landGllacrtraillLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  landGllacrtraillLocationIcon: {
    fontSize: 13,
    color: '#7AB3CC',
  },
  landGllacrtraillLocation: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 13,
    lineHeight: 19.5,
    color: '#7AB3CC',
  },
  landGllacrtraillBrief: {
    ...typographyMold.bodyNarrative,
  },
});
