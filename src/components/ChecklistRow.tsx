import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {fontFamily} from '../palette/typographyMold';

type Props = {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
};

export function ChecklistRow({label, isChecked, onToggle}: Props) {
  return (
    <Pressable onPress={onToggle} style={styles.row}>
      <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
        {isChecked ? <Text style={styles.checkmark}>✓</Text> : null}
      </View>
      <Text style={[styles.label, isChecked && styles.labelChecked]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingLattice.unitMd,
    paddingHorizontal: spacingLattice.unitLg,
    paddingVertical: 14,
    borderRadius: spacingLattice.radiusLg,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorder,
    backgroundColor: chromaVault.actionGhostFill,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: chromaVault.accentGlacialBorderAction,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: chromaVault.accentGlacial,
    borderColor: chromaVault.accentGlacial,
  },
  checkmark: {
    fontSize: 13,
    fontWeight: '700',
    color: chromaVault.actionLabelOnFill,
    marginTop: -1,
  },
  label: {
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    color: chromaVault.textHighEmphasis,
  },
  labelChecked: {
    color: chromaVault.accentGlacialSoft,
    textDecorationLine: 'line-through',
  },
});
