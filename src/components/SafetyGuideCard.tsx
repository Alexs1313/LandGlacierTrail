import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {GuideSafetyNote} from '../types/guideSchema';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {fontFamily, typographyMold} from '../palette/typographyMold';

type Props = {
  note: GuideSafetyNote;
  onPress: () => void;
};

export function SafetyGuideCard({note, onPress}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.iconWrap}>
        <Text style={styles.shield}>🛡</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.preview} numberOfLines={3}>
          {note.previewText}
        </Text>
        <View style={styles.linkRow}>
          <Text style={styles.link}>Read more</Text>
          <Text style={styles.chevron}>›</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: spacingLattice.unitMd,
    padding: spacingLattice.unitLg,
    borderRadius: spacingLattice.radiusXl,
    backgroundColor: chromaVault.surfaceCard,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorder,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: chromaVault.statusSignalBorder,
    backgroundColor: 'rgba(214, 51, 51, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shield: {
    fontSize: 20,
    color: chromaVault.statusSignal,
  },
  body: {
    flex: 1,
    gap: spacingLattice.unitSm,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    lineHeight: 22.5,
    color: chromaVault.textHighEmphasis,
  },
  preview: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 19.5,
    color: chromaVault.textSector,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: spacingLattice.unitXs,
  },
  link: {
    ...typographyMold.linkAction,
  },
  chevron: {
    fontSize: 16,
    color: chromaVault.accentGlacial,
    marginTop: -1,
  },
});
