import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {typographyMold} from './LandGllacrtrailltypographyMold';

type Props = {
  label: string;
  value: string;
};

export function LandGllacrtraillInfoDisplayCard({label, value}: Props) {
  return (
    <View style={styles.landGllacrtraillCard}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.landGllacrtraillValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillCard: {
    flex: 1,
    backgroundColor: '#0D1E35',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.12)',
    paddingHorizontal: 13,
    paddingTop: 13,
    paddingBottom: 12,
    gap: 4,
  },
  label: {
    ...typographyMold.captionSmall,
  },
  landGllacrtraillValue: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#C8E4F5',
  },
});
