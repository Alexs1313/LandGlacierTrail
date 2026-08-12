import React from 'react';
import {StyleSheet, Text, ViewStyle} from 'react-native';
import {LandGllacrtraillScalePressable} from './LandGllacrtraillScalePressable';
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
    <LandGllacrtraillScalePressable
      onPress={onPress}
      style={[styles.landGllacrtraillPressableOuter, style]}
      animateStyle={[
        styles.landGllacrtraillPressable,
        isHighlighted && styles.landGllacrtraillPressableHighlighted,
      ]}>
      <Text
        style={[
          styles.landGllacrtraillIcon,
          isHighlighted && styles.landGllacrtraillIconSaved,
        ]}>
        {icon}
      </Text>
      <Text style={styles.label}>{label}</Text>
    </LandGllacrtraillScalePressable>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillPressableOuter: {
    flex: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  landGllacrtraillPressable: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 52.5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.45)',
    backgroundColor: 'rgba(6, 15, 30, 0.55)',
  },
  landGllacrtraillPressableHighlighted: {
    backgroundColor: 'rgba(61, 184, 240, 0.22)',
    borderColor: 'rgba(61, 184, 240, 0.55)',
  },
  landGllacrtraillIcon: {
    fontSize: 16,
    color: '#7AD4F5',
  },
  landGllacrtraillIconSaved: {
    color: '#F0C843',
  },
  label: {
    ...typographyMold.buttonGhost,
    color: '#E8F4FC',
    flexShrink: 1,
  },
});
