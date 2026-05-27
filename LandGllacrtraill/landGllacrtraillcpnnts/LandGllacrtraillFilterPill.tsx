import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';


type Props = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};

export function LandGllacrtraillFilterPill({label, isActive, onPress}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.landGllacrtraillPill, isActive && styles.landGllacrtraillPillActive]}>
      <Text style={[styles.label, isActive && styles.landGllacrtraillLabelActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillPill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(61, 184, 240, 0.12)',
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.12)',
  },
  landGllacrtraillPillActive: {
    backgroundColor: '#3DB8F0',
    borderColor: '#3DB8F0',
  },
  label: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 13,
    letterSpacing: 0.52,
    color: '#7AD4F5',
  },
  landGllacrtraillLabelActive: {
    color: '#060F1E',
    fontFamily: 'BarlowCondensed-Regular',
  },
});
