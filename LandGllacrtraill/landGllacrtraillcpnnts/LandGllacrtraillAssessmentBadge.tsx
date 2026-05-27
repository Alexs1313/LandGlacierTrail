import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {typographyMold} from './LandGllacrtrailltypographyMold';

type Props = {
  value: number;
};

export function LandGllacrtraillAssessmentBadge({value}: Props) {
  return (
    <View style={styles.landGllacrtraillRow}>
      <Text style={styles.landGllacrtraillStar}>★</Text>
      <Text style={styles.landGllacrtraillValue}>{value.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  landGllacrtraillStar: {
    color: '#F0C843',
    fontSize: 12,
  },
  landGllacrtraillValue: {
    ...typographyMold.assessmentValue,
  },
});
