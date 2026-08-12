import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {LandGllacrtraillFadeInView} from './LandGllacrtraillFadeInView';
import {LandGllacrtraillScalePressable} from './LandGllacrtraillScalePressable';
import {resolveFormationVisual} from './LandGllacrtraillvisualRegistry';
import {kindDisplayMap} from './LandGllacrtraillformationCatalog';
import {FormationEntry} from './LandGllacrtraillentrySchema';
import {typographyMold} from './LandGllacrtrailltypographyMold';
import {LandGllacrtraillAssessmentBadge} from './LandGllacrtraillAssessmentBadge';

type Props = {
  entry: FormationEntry;
  isMarked?: boolean;
  onPress?: () => void;
  onMarkPress?: () => void;
  index?: number;
};

export function LandGllacrtraillLocationRowItem({
  entry,
  isMarked,
  onPress,
  onMarkPress,
  index = 0,
}: Props) {
  const source = resolveFormationVisual(entry.visualAssetKey);
  const landGllacrtraillKindLabel = kindDisplayMap[entry.formationKind];

  return (
    <LandGllacrtraillFadeInView index={index}>
      <LandGllacrtraillScalePressable
        onPress={onPress}
        pressScale={0.97}
        animateStyle={styles.landGllacrtraillCard}>
        <Image source={source} style={styles.landGllacrtraillThumb} />
        <View style={styles.landGllacrtraillContent}>
          <View style={styles.landGllacrtraillTopRow}>
            <View style={styles.landGllacrtraillKindBadge}>
              <Text style={styles.landGllacrtraillKindText}>
                {landGllacrtraillKindLabel}
              </Text>
            </View>
            <LandGllacrtraillScalePressable onPress={onMarkPress} pressScale={0.85}>
              <Text
                style={[
                  styles.landGllacrtraillMarkIcon,
                  isMarked && styles.landGllacrtraillMarkIconActive,
                ]}>
                {isMarked ? '★' : '☆'}
              </Text>
            </LandGllacrtraillScalePressable>
          </View>
          <Text style={styles.landGllacrtraillTitle} numberOfLines={1}>
            {entry.displayLabel}
          </Text>
          <Text style={styles.landGllacrtraillBrief} numberOfLines={2}>
            {entry.briefNarrative}
          </Text>
          <LandGllacrtraillAssessmentBadge value={entry.assessmentValue} />
        </View>
      </LandGllacrtraillScalePressable>
    </LandGllacrtraillFadeInView>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillCard: {
    flexDirection: 'row',
    backgroundColor: '#0D1E35',
    borderRadius: 16,
    overflow: 'hidden',
    borderColor: 'rgba(61, 184, 240, 0.12)',
    height: 138,
  },
  landGllacrtraillThumb: {
    width: 112,
    height: '100%',
  },
  landGllacrtraillContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 4,
  },
  landGllacrtraillTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  landGllacrtraillKindBadge: {
    backgroundColor: 'rgba(61, 184, 240, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  landGllacrtraillKindText: {
    ...typographyMold.kindPill,
  },
  landGllacrtraillMarkIcon: {
    fontSize: 18,
    color: '#7AD4F5',
  },
  landGllacrtraillMarkIconActive: {
    color: '#F0C843',
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingRow,
  },
  landGllacrtraillBrief: {
    ...typographyMold.bodyRow,
  },
});
