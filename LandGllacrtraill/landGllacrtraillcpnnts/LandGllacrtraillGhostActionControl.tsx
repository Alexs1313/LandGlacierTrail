import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';

import {typographyMold} from './LandGllacrtrailltypographyMold';

type Props = {
  label: string;
  icon: string;
  onPress: () => void;
  isHighlighted?: boolean;
  style?: ViewStyle;
};

export function LandGllacrtraillGhostActionControl({
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
        styles.landGllacrtraillPressable,
        isHighlighted && styles.landGllacrtraillPressableHighlighted,
        style,
      ]}>
      <Text style={[styles.landGllacrtraillIcon, isHighlighted && styles.landGllacrtraillIconSaved]}>
        {icon}
      </Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillPressable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 52.5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.3)',
    backgroundColor: 'rgba(61, 184, 240, 0.1)',
  },
  landGllacrtraillPressableHighlighted: {
    backgroundColor: 'rgba(61, 184, 240, 0.2)',
  },
  landGllacrtraillIcon: {
    fontSize: 16,
    color: '#3DB8F0',
  },
  landGllacrtraillIconSaved: {
    color: '#F0C843',
  },
  label: {
    ...typographyMold.buttonGhost,
  },
});
