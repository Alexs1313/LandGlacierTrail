import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {LandGllacrtraillFadeInView} from './LandGllacrtraillFadeInView';
import {LandGllacrtraillScalePressable} from './LandGllacrtraillScalePressable';
import {resolveFormationVisual} from './LandGllacrtraillvisualRegistry';
import {kindDisplayMap} from './LandGllacrtraillformationCatalog';
import type {FormationEntry} from './LandGllacrtraillentrySchema';
import {typographyMold} from './LandGllacrtrailltypographyMold';

type Props = {
  entry: FormationEntry;
  onClose: () => void;
  onViewDetails: () => void;
};

export function LandGllacrtraillMapSelectionPanel({entry, onClose, onViewDetails}: Props) {
  const landGllacrtraillVisual = resolveFormationVisual(entry.visualAssetKey);
  const landGllacrtraillKindLabel = kindDisplayMap[entry.formationKind];

  return (
    <LandGllacrtraillFadeInView offset={40} duration={300}>
      <View style={styles.landGllacrtraillPanel}>
        <Image
          source={landGllacrtraillVisual}
          style={styles.landGllacrtraillThumb}
          resizeMode="cover"
        />
        <View style={styles.landGllacrtraillBody}>
          <Text style={styles.landGllacrtraillKind}>{landGllacrtraillKindLabel}</Text>
          <Text style={styles.landGllacrtraillTitle} numberOfLines={2}>
            {entry.displayLabel}
          </Text>
          <Text style={styles.landGllacrtraillBrief} numberOfLines={2}>
            {entry.briefNarrative}
          </Text>
          <LandGllacrtraillScalePressable
            onPress={onViewDetails}
            pressScale={0.95}
            animateStyle={styles.landGllacrtraillDetailsRow}>
            <Text style={styles.landGllacrtraillDetailsLabel}>View Details</Text>
            <Text style={styles.landGllacrtraillDetailsChevron}>›</Text>
          </LandGllacrtraillScalePressable>
        </View>
        <LandGllacrtraillScalePressable
          onPress={onClose}
          pressScale={0.85}
          animateStyle={styles.landGllacrtraillCloseBtn}
          accessibilityLabel="Close">
          <Text style={styles.landGllacrtraillCloseGlyph}>×</Text>
        </LandGllacrtraillScalePressable>
      </View>
    </LandGllacrtraillFadeInView>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillPanel: {
    flexDirection: 'row',
    backgroundColor: '#0D1E35',
    borderTopWidth: 1,
    borderTopColor: 'rgba(61, 184, 240, 0.12)',
    paddingTop: 17,
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
  },
  landGllacrtraillThumb: {
    width: 80,
    height: 80,
    borderRadius: 14,
  },
  landGllacrtraillBody: {
    flex: 1,
    gap: 2,
    paddingRight: 24,
  },
  landGllacrtraillKind: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 11,
    lineHeight: 16.5,
    color: '#3DB8F0',
    marginTop: 2,
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingRow,
    marginTop: 2,
  },
  landGllacrtraillBrief: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#7AB3CC',
    marginTop: 2,
  },
  landGllacrtraillDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  landGllacrtraillDetailsLabel: {
    ...typographyMold.linkAction,
  },
  landGllacrtraillDetailsChevron: {
    fontSize: 16,
    color: '#3DB8F0',
    marginTop: -1,
  },
  landGllacrtraillCloseBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(61, 184, 240, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landGllacrtraillCloseGlyph: {
    fontSize: 18,
    color: '#7AD4F5',
    marginTop: -1,
  },
});
