import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';


type Props = {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
};

export function LandGllacrtraillChecklistRow({label, isChecked, onToggle}: Props) {
  return (
    <Pressable onPress={onToggle} style={styles.landGllacrtraillRow}>
      <View style={[styles.landGllacrtraillCheckbox, isChecked && styles.landGllacrtraillCheckboxChecked]}>
        {isChecked ? <Text style={styles.landGllacrtraillCheckmark}>✓</Text> : null}
      </View>
      <Text style={[styles.label, isChecked && styles.landGllacrtraillLabelChecked]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.12)',
    backgroundColor: 'rgba(61, 184, 240, 0.1)',
  },
  landGllacrtraillCheckbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: 'rgba(61, 184, 240, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landGllacrtraillCheckboxChecked: {
    backgroundColor: '#3DB8F0',
    borderColor: '#3DB8F0',
  },
  landGllacrtraillCheckmark: {
    fontSize: 13,
    fontWeight: '700',
    color: '#060F1E',
    marginTop: -1,
  },
  label: {
    flex: 1,
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#E8F4FC',
  },
  landGllacrtraillLabelChecked: {
    color: '#7AD4F5',
    textDecorationLine: 'line-through',
  },
});
