import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';

type Props = {
  label: string;
  value: string;
};

export function InfoDisplayCard({label, value}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: chromaVault.surfaceCard,
    borderRadius: spacingLattice.radiusLg,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorder,
    paddingHorizontal: 13,
    paddingTop: 13,
    paddingBottom: 12,
    gap: 4,
  },
  label: {
    ...typographyMold.captionSmall,
  },
  value: {
    fontFamily: typographyMold.bodyRow.fontFamily,
    fontSize: 12,
    lineHeight: 18,
    color: '#C8E4F5',
  },
});
