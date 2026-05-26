import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {resolveFormationVisual} from '../assets/visualRegistry';
import {kindDisplayMap} from '../data/formationCatalog';
import {FormationEntry} from '../types/entrySchema';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';
import {AssessmentBadge} from './AssessmentBadge';

type Props = {
  entry: FormationEntry;
  isMarked?: boolean;
  onPress?: () => void;
  onMarkPress?: () => void;
};

export function LocationRowItem({
  entry,
  isMarked,
  onPress,
  onMarkPress,
}: Props) {
  const source = resolveFormationVisual(entry.visualAssetKey);
  const kindLabel = kindDisplayMap[entry.formationKind];

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={source} style={styles.thumb} />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.kindBadge}>
            <Text style={styles.kindText}>{kindLabel}</Text>
          </View>
          <Pressable onPress={onMarkPress} hitSlop={12}>
            <Text style={[styles.markIcon, isMarked && styles.markIconActive]}>
              {isMarked ? '★' : '☆'}
            </Text>
          </Pressable>
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {entry.displayLabel}
        </Text>
        <Text style={styles.brief} numberOfLines={2}>
          {entry.briefNarrative}
        </Text>
        <AssessmentBadge value={entry.assessmentValue} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: chromaVault.surfaceCard,
    borderRadius: spacingLattice.radiusXl,
    overflow: 'hidden',
    borderColor: chromaVault.accentGlacialBorder,
    height: 138,
  },
  thumb: {
    width: 112,
    height: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: spacingLattice.unitLg,
    paddingVertical: spacingLattice.unitMd,
    gap: 4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  kindBadge: {
    backgroundColor: chromaVault.surfaceKindPill,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: spacingLattice.radiusPill,
  },
  kindText: {
    ...typographyMold.kindPill,
  },
  markIcon: {
    fontSize: 18,
    color: chromaVault.accentGlacialSoft,
  },
  markIconActive: {
    color: chromaVault.statusGold,
  },
  title: {
    ...typographyMold.headingRow,
  },
  brief: {
    ...typographyMold.bodyRow,
  },
});
