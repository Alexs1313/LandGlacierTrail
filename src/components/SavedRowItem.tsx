import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {resolveFormationVisual} from '../assets/visualRegistry';
import {kindDisplayMap} from '../data/formationCatalog';
import {FormationEntry} from '../types/entrySchema';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {fontFamily, typographyMold} from '../palette/typographyMold';

type Props = {
  entry: FormationEntry;
  onPress?: () => void;
  onRemovePress?: () => void;
};

export function SavedRowItem({entry, onPress, onRemovePress}: Props) {
  const source = resolveFormationVisual(entry.visualAssetKey);
  const kindLabel = kindDisplayMap[entry.formationKind];

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={source} style={styles.thumb} />
      <View style={styles.content}>
        <Text style={styles.kind}>{kindLabel}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {entry.displayLabel}
        </Text>
        <Text style={styles.brief} numberOfLines={2}>
          {entry.briefNarrative}
        </Text>
        <Pressable
          onPress={onRemovePress}
          hitSlop={8}
          style={styles.removeRow}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${entry.displayLabel}`}>
          <Text style={styles.removeIcon}>✕</Text>
          <Text style={styles.removeLabel}>Remove</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: chromaVault.surfaceCard,
    borderRadius: spacingLattice.radiusXl,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorder,
    overflow: 'hidden',
    height: 134,
  },
  thumb: {
    width: 112,
    height: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: spacingLattice.unitLg,
    paddingTop: 17,
    paddingBottom: spacingLattice.unitMd,
  },
  kind: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    lineHeight: 16.5,
    color: chromaVault.accentGlacial,
    marginBottom: 2,
  },
  title: {
    ...typographyMold.headingRow,
    marginBottom: 4,
  },
  brief: {
    ...typographyMold.bodyRow,
    flex: 1,
  },
  removeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  removeIcon: {
    fontSize: 11,
    lineHeight: 11,
    color: chromaVault.statusSignal,
    opacity: 0.8,
  },
  removeLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    lineHeight: 18,
    color: chromaVault.statusSignal,
    opacity: 0.8,
  },
});
