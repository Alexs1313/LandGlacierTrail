import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';

type Props = {
  label: string;
  icon: string;
  onPress: () => void;
  isHighlighted?: boolean;
  style?: ViewStyle;
};

export function GhostActionControl({
  label,
  icon,
  onPress,
  isHighlighted,
  style,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.pressable,
        isHighlighted && styles.pressableHighlighted,
        style,
      ]}>
      <Text style={[styles.icon, isHighlighted && styles.iconSaved]}>
        {icon}
      </Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacingLattice.unitSm,
    height: 52.5,
    borderRadius: spacingLattice.radiusLg,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorderAction,
    backgroundColor: chromaVault.actionGhostFill,
  },
  pressableHighlighted: {
    backgroundColor: chromaVault.actionGhostFillMarked,
  },
  icon: {
    fontSize: 16,
    color: chromaVault.accentGlacial,
  },
  iconSaved: {
    color: chromaVault.statusGold,
  },
  label: {
    ...typographyMold.buttonGhost,
  },
});
