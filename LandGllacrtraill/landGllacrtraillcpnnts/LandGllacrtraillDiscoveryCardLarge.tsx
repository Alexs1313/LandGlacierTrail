import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {resolveFormationVisual} from './LandGllacrtraillvisualRegistry';
import {kindDisplayMap} from './LandGllacrtraillformationCatalog';
import {FormationEntry} from './LandGllacrtraillentrySchema';

import {typographyMold} from './LandGllacrtrailltypographyMold';
import {LandGllacrtraillAssessmentBadge} from './LandGllacrtraillAssessmentBadge';

type Props = {
  entry: FormationEntry;
  onPress?: () => void;
};

export function LandGllacrtraillDiscoveryCardLarge({entry, onPress}: Props) {
  const source = resolveFormationVisual(entry.visualAssetKey);
  const landGllacrtraillKindLabel = kindDisplayMap[entry.formationKind];

  return (
    <Pressable onPress={onPress} style={styles.landGllacrtraillWrapper}>
      <ImageBackground
        source={source}
        style={styles.landGllacrtraillImage}
        imageStyle={styles.landGllacrtraillImageRadius}>
        <LinearGradient
          colors={[
            'rgba(6,15,30,0)',
            'rgba(6,15,30,0.3)',
            'rgba(6, 15, 30, 0.95)',
          ]}
          locations={[0, 0.6, 1]}
          style={styles.landGllacrtraillGradient}>
          <View style={{padding: 15, justifyContent: 'space-between', flex: 1}}>
            <View style={styles.landGllacrtraillTopRow}>
              {entry.priorityLevel ? (
                <View style={styles.landGllacrtraillFeaturedBadge}>
                  <View style={styles.landGllacrtraillFeaturedDot} />
                  <Text style={styles.landGllacrtraillFeaturedText}>FEATURED</Text>
                </View>
              ) : (
                <View />
              )}
            </View>
            <View style={styles.landGllacrtraillBottom}>
              <View style={styles.landGllacrtraillKindBadge}>
                <Text style={styles.landGllacrtraillKindText}>{landGllacrtraillKindLabel}</Text>
              </View>
              <Text style={styles.landGllacrtraillTitle}>{entry.displayLabel}</Text>
              <View style={styles.landGllacrtraillMetaRow}>
                <LandGllacrtraillAssessmentBadge value={entry.assessmentValue} />
                <Text style={styles.landGllacrtraillSector}>{entry.sectorLabel}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 190,
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.12)',
  },
  landGllacrtraillImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  landGllacrtraillImageRadius: {
    borderRadius: 16,
  },
  landGllacrtraillGradient: {
    flex: 1,
    justifyContent: 'space-between',
  },
  landGllacrtraillTopRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  landGllacrtraillKindBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(61, 184, 240, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.25)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    marginBottom: 8,
  },
  landGllacrtraillKindText: {
    ...typographyMold.kindPill,
  },
  landGllacrtraillFeaturedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 200, 67, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(240, 200, 67, 0.4)',
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 999,
    gap: 4,
  },
  landGllacrtraillFeaturedDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F0C843',
  },
  landGllacrtraillFeaturedText: {
    fontSize: 11,
    fontFamily: 'BarlowCondensed-Regular',
    color: '#F0C843',
    letterSpacing: 0.5,
  },
  landGllacrtraillBottom: {
    gap: 4.2,
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingCard,
  },
  landGllacrtraillMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  landGllacrtraillSector: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 12,
    color: 'rgba(168, 212, 236, 0.6)',
  },
});
