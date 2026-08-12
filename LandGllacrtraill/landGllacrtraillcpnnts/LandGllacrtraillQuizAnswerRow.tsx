import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {LandGllacrtraillFadeInView} from './LandGllacrtraillFadeInView';
import {LandGllacrtraillScalePressable} from './LandGllacrtraillScalePressable';

type Props = {
  letter: string;
  label: string;
  isSelected: boolean;
  onPress: () => void;
  index?: number;
};

export function LandGllacrtraillQuizAnswerRow({
  letter,
  label,
  isSelected,
  onPress,
  index = 0,
}: Props) {
  return (
    <LandGllacrtraillFadeInView index={index}>
      <LandGllacrtraillScalePressable
        onPress={onPress}
        pressScale={0.97}
        animateStyle={[
          styles.landGllacrtraillRow,
          isSelected && styles.landGllacrtraillRowSelected,
        ]}>
        <Text
          style={[
            styles.landGllacrtraillLetter,
            isSelected && styles.landGllacrtraillLetterSelected,
          ]}>
          {letter}
        </Text>
        <Text style={[styles.label, isSelected && styles.landGllacrtraillLabelSelected]}>
          {label}
        </Text>
      </LandGllacrtraillScalePressable>
    </LandGllacrtraillFadeInView>
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
  landGllacrtraillRowSelected: {
    borderColor: '#3DB8F0',
    backgroundColor: 'rgba(61, 184, 240, 0.22)',
  },
  landGllacrtraillLetter: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: 'rgba(61, 184, 240, 0.3)',
    textAlign: 'center',
    lineHeight: 26,
    fontFamily: 'BarlowCondensed-SemiBold',
    fontSize: 14,
    color: '#7AD4F5',
  },
  landGllacrtraillLetterSelected: {
    backgroundColor: '#3DB8F0',
    borderColor: '#3DB8F0',
    color: '#060F1E',
  },
  label: {
    flex: 1,
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#E8F4FC',
  },
  landGllacrtraillLabelSelected: {
    color: '#7AD4F5',
  },
});
