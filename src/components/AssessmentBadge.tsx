import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {chromaVault} from '../palette/chromaVault';
import {typographyMold} from '../palette/typographyMold';

type Props = {
  value: number;
};

export function AssessmentBadge({value}: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.star}>★</Text>
      <Text style={styles.value}>{value.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  star: {
    color: chromaVault.statusGold,
    fontSize: 12,
  },
  value: {
    ...typographyMold.assessmentValue,
  },
});
