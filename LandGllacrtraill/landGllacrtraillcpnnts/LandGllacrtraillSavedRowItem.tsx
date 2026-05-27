import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {resolveFormationVisual} from './LandGllacrtraillvisualRegistry';
import {kindDisplayMap} from './LandGllacrtraillformationCatalog';
import {FormationEntry} from './LandGllacrtraillentrySchema';

import {typographyMold} from './LandGllacrtrailltypographyMold';

type Props = {
  entry: FormationEntry;
  onPress?: () => void;
  onRemovePress?: () => void;
};

export function LandGllacrtraillSavedRowItem({entry, onPress, onRemovePress}: Props) {
  const source = resolveFormationVisual(entry.visualAssetKey);
  const landGllacrtraillKindLabel = kindDisplayMap[entry.formationKind];

  return (
    <Pressable onPress={onPress} style={styles.landGllacrtraillCard}>
      <Image source={source} style={styles.landGllacrtraillThumb} />
      <View style={styles.landGllacrtraillContent}>
        <Text style={styles.landGllacrtraillKind}>{landGllacrtraillKindLabel}</Text>
        <Text style={styles.landGllacrtraillTitle} numberOfLines={1}>
          {entry.displayLabel}
        </Text>
        <Text style={styles.landGllacrtraillBrief} numberOfLines={2}>
          {entry.briefNarrative}
        </Text>
        <Pressable
          onPress={onRemovePress}
          hitSlop={8}
          style={styles.landGllacrtraillRemoveRow}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${entry.displayLabel}`}>
          <Text style={styles.landGllacrtraillRemoveIcon}>✕</Text>
          <Text style={styles.landGllacrtraillRemoveLabel}>Remove</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillCard: {
    flexDirection: 'row',
    backgroundColor: '#0D1E35',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.12)',
    overflow: 'hidden',
    height: 134,
  },
  landGllacrtraillThumb: {
    width: 112,
    height: '100%',
  },
  landGllacrtraillContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 17,
    paddingBottom: 12,
  },
  landGllacrtraillKind: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 11,
    lineHeight: 16.5,
    color: '#3DB8F0',
    marginBottom: 2,
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingRow,
    marginBottom: 4,
  },
  landGllacrtraillBrief: {
    ...typographyMold.bodyRow,
    flex: 1,
  },
  landGllacrtraillRemoveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  landGllacrtraillRemoveIcon: {
    fontSize: 11,
    lineHeight: 11,
    color: '#D63333',
    opacity: 0.8,
  },
  landGllacrtraillRemoveLabel: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#D63333',
    opacity: 0.8,
  },
});
