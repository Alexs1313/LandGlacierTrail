import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {LandGllacrtraillScalePressable} from './LandGllacrtraillScalePressable';

type Props = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};

export function LandGllacrtraillFilterPill({label, isActive, onPress}: Props) {
  return (
    <LandGllacrtraillScalePressable
      onPress={onPress}
      pressScale={0.92}
      animateStyle={[
        styles.landGllacrtraillPill,
        isActive && styles.landGllacrtraillPillActive,
      ]}>
      <Text style={[styles.label, isActive && styles.landGllacrtraillLabelActive]}>
        {label}
      </Text>
    </LandGllacrtraillScalePressable>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillPill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(6, 15, 30, 0.45)',
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.35)',
  },
  landGllacrtraillPillActive: {
    backgroundColor: '#3DB8F0',
    borderColor: '#3DB8F0',
  },
  label: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 13,
    letterSpacing: 0.52,
    color: '#E8F4FC',
  },
  landGllacrtraillLabelActive: {
    color: '#060F1E',
    fontFamily: 'BarlowCondensed-Regular',
  },
});
