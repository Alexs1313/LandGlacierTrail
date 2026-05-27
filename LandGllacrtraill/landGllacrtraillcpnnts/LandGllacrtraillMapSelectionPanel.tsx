import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
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
    <View style={styles.landGllacrtraillPanel}>
      <Image source={landGllacrtraillVisual} style={styles.landGllacrtraillThumb} resizeMode="cover" />
      <View style={styles.landGllacrtraillBody}>
        <Text style={styles.landGllacrtraillKind}>{landGllacrtraillKindLabel}</Text>
        <Text style={styles.landGllacrtraillTitle} numberOfLines={2}>
          {entry.displayLabel}
        </Text>
        <Text style={styles.landGllacrtraillBrief} numberOfLines={2}>
          {entry.briefNarrative}
        </Text>
        <Pressable onPress={onViewDetails} style={styles.landGllacrtraillDetailsRow}>
          <Text style={styles.landGllacrtraillDetailsLabel}>View Details</Text>
          <Text style={styles.landGllacrtraillDetailsChevron}>›</Text>
        </Pressable>
      </View>
      <Pressable
        onPress={onClose}
        style={styles.landGllacrtraillCloseBtn}
        hitSlop={8}
        accessibilityLabel="Close">
        <Text style={styles.landGllacrtraillCloseGlyph}>×</Text>
      </Pressable>
    </View>
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
    lineHeight: 16,
    color: '#7AB3CC',
    marginTop: 2,
  },
  landGllacrtraillDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  landGllacrtraillDetailsLabel: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 13,
    lineHeight: 19.5,
    color: '#3DB8F0',
  },
  landGllacrtraillDetailsChevron: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 16,
    color: '#3DB8F0',
    marginTop: -1,
  },
  landGllacrtraillCloseBtn: {
    position: 'absolute',
    top: 14,
    right: 16,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  landGllacrtraillCloseGlyph: {
    fontSize: 20,
    lineHeight: 22,
    color: '#7AB3CC',
  },
});
