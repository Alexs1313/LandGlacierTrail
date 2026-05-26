import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {resolveFormationVisual} from '../assets/visualRegistry';
import {kindDisplayMap} from '../data/formationCatalog';
import type {FormationEntry} from '../types/entrySchema';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {fontFamily, typographyMold} from '../palette/typographyMold';

type Props = {
  entry: FormationEntry;
  onClose: () => void;
  onViewDetails: () => void;
};

export function MapSelectionPanel({entry, onClose, onViewDetails}: Props) {
  const visual = resolveFormationVisual(entry.visualAssetKey);
  const kindLabel = kindDisplayMap[entry.formationKind];

  return (
    <View style={styles.panel}>
      <Image source={visual} style={styles.thumb} resizeMode="cover" />
      <View style={styles.body}>
        <Text style={styles.kind}>{kindLabel}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {entry.displayLabel}
        </Text>
        <Text style={styles.brief} numberOfLines={2}>
          {entry.briefNarrative}
        </Text>
        <Pressable onPress={onViewDetails} style={styles.detailsRow}>
          <Text style={styles.detailsLabel}>View Details</Text>
          <Text style={styles.detailsChevron}>›</Text>
        </Pressable>
      </View>
      <Pressable
        onPress={onClose}
        style={styles.closeBtn}
        hitSlop={8}
        accessibilityLabel="Close">
        <Text style={styles.closeGlyph}>×</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    backgroundColor: chromaVault.surfaceCard,
    borderTopWidth: 1,
    borderTopColor: chromaVault.accentGlacialBorder,
    paddingTop: 17,
    paddingHorizontal: spacingLattice.unitLg,
    paddingBottom: spacingLattice.unitLg,
    gap: spacingLattice.unitMd,
  },
  thumb: {
    width: 80,
    height: 80,
    borderRadius: spacingLattice.radiusLg,
  },
  body: {
    flex: 1,
    gap: 2,
    paddingRight: spacingLattice.unit2xl,
  },
  kind: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    lineHeight: 16.5,
    color: chromaVault.accentGlacial,
    marginTop: 2,
  },
  title: {
    ...typographyMold.headingRow,
    marginTop: 2,
  },
  brief: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 16,
    color: chromaVault.textSector,
    marginTop: 2,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacingLattice.unitSm,
    gap: 4,
  },
  detailsLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
    lineHeight: 19.5,
    color: chromaVault.accentGlacial,
  },
  detailsChevron: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    color: chromaVault.accentGlacial,
    marginTop: -1,
  },
  closeBtn: {
    position: 'absolute',
    top: 14,
    right: spacingLattice.unitLg,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeGlyph: {
    fontSize: 20,
    lineHeight: 22,
    color: chromaVault.textSector,
  },
});
