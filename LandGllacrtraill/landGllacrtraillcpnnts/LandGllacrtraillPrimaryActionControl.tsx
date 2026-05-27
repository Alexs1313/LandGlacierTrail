import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {typographyMold} from './LandGllacrtrailltypographyMold';

type Props = {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  variant?: 'onboard' | 'map';
  leadingIcon?: string;
};

export function LandGllacrtraillPrimaryActionControl({
  label,
  onPress,
  style,
  variant = 'onboard',
  leadingIcon,
}: Props) {
  const landGllacrtraillIsMap = variant === 'map';

  return (
    <Pressable onPress={onPress} style={[styles.landGllacrtraillPressable, style]}>
      <LinearGradient
        colors={[
          '#1E6FA8',
          '#3DB8F0',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[styles.landGllacrtraillGradient, landGllacrtraillIsMap && styles.landGllacrtraillGradientMap]}>
        <View style={styles.landGllacrtraillContentRow}>
          {leadingIcon ? (
            <Text style={[styles.landGllacrtraillLeadingIcon, landGllacrtraillIsMap && styles.landGllacrtraillLeadingIconMap]}>
              {leadingIcon}
            </Text>
          ) : null}
          <Text style={[styles.label, landGllacrtraillIsMap && styles.landGllacrtraillLabelMap]}>{label}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillPressable: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#3DB8F0',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  landGllacrtraillGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 56,
  },
  landGllacrtraillGradientMap: {
    borderRadius: 14,
  },
  landGllacrtraillContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  landGllacrtraillLeadingIcon: {
    fontSize: 16,
    color: '#E8F4FC',
  },
  landGllacrtraillLeadingIconMap: {
    color: '#060F1E',
    fontSize: 18,
  },
  label: {
    ...typographyMold.buttonLabel,
  },
  landGllacrtraillLabelMap: {
    ...typographyMold.buttonLabelMap,
  },
});
