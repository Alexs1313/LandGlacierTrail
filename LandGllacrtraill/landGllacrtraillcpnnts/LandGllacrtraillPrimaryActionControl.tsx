import React from 'react';
import {StyleSheet, Text, type StyleProp, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LandGllacrtraillScalePressable} from './LandGllacrtraillScalePressable';
import {typographyMold} from './LandGllacrtrailltypographyMold';

type Props = {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: 'onboard' | 'map';
  leadingIcon?: string;
  disabled?: boolean;
};

export function LandGllacrtraillPrimaryActionControl({
  label,
  onPress,
  style,
  variant = 'onboard',
  leadingIcon,
  disabled = false,
}: Props) {
  const landGllacrtraillIsMap = variant === 'map';

  return (
    <LandGllacrtraillScalePressable
      onPress={onPress}
      disabled={disabled}
      pressScale={disabled ? 1 : 0.96}
      style={style}
      animateStyle={[
        styles.landGllacrtraillPressable,
        disabled && styles.landGllacrtraillPressableDisabled,
      ]}>
      <LinearGradient
        colors={
          disabled
            ? ['rgba(61, 184, 240, 0.12)', 'rgba(61, 184, 240, 0.12)']
            : ['#1E6FA8', '#3DB8F0']
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[
          styles.landGllacrtraillGradient,
          landGllacrtraillIsMap && styles.landGllacrtraillGradientMap,
          disabled && styles.landGllacrtraillGradientDisabled,
        ]}>
        <View style={styles.landGllacrtraillContentRow}>
          {leadingIcon ? (
            <Text
              style={[
                styles.landGllacrtraillLeadingIcon,
                landGllacrtraillIsMap && styles.landGllacrtraillLeadingIconMap,
                disabled && styles.landGllacrtraillLeadingIconDisabled,
              ]}>
              {leadingIcon}
            </Text>
          ) : null}
          <Text
            style={[
              styles.label,
              landGllacrtraillIsMap && styles.landGllacrtraillLabelMap,
              disabled && styles.landGllacrtraillLabelDisabled,
              disabled && landGllacrtraillIsMap && styles.landGllacrtraillLabelMapDisabled,
            ]}>
            {label}
          </Text>
        </View>
      </LinearGradient>
    </LandGllacrtraillScalePressable>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillPressable: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#3DB8F0',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  landGllacrtraillPressableDisabled: {
    shadowOpacity: 0,
    elevation: 0,
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
  landGllacrtraillGradientDisabled: {
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.2)',
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
  landGllacrtraillLeadingIconDisabled: {
    color: '#7AB3CC',
  },
  label: {
    ...typographyMold.buttonLabel,
  },
  landGllacrtraillLabelMap: {
    ...typographyMold.buttonLabelMap,
  },
  landGllacrtraillLabelDisabled: {
    color: 'rgba(232, 244, 252, 0.45)',
  },
  landGllacrtraillLabelMapDisabled: {
    color: '#7AB3CC',
  },
});
