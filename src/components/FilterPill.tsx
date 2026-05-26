import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';

type Props = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};

export function FilterPill({label, isActive, onPress}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.pill, isActive && styles.pillActive]}>
      <Text style={[styles.label, isActive && styles.labelActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: spacingLattice.radiusPill,
    backgroundColor: chromaVault.surfaceGlassLight,
    marginRight: spacingLattice.unitSm,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorder,
  },
  pillActive: {
    backgroundColor: chromaVault.accentGlacial,
    borderColor: chromaVault.accentGlacial,
  },
  label: {
    fontFamily: typographyMold.kindPill.fontFamily,
    fontSize: 13,
    letterSpacing: 0.52,
    color: chromaVault.accentGlacialSoft,
  },
  labelActive: {
    color: chromaVault.actionLabelOnFill,
    fontFamily: typographyMold.kindPill.fontFamily,
  },
});
