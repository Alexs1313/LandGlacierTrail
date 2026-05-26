import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';

type Props = {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  variant?: 'onboard' | 'map';
  leadingIcon?: string;
};

export function PrimaryActionControl({
  label,
  onPress,
  style,
  variant = 'onboard',
  leadingIcon,
}: Props) {
  const isMap = variant === 'map';

  return (
    <Pressable onPress={onPress} style={[styles.pressable, style]}>
      <LinearGradient
        colors={[
          chromaVault.actionGradientStart,
          chromaVault.actionGradientEnd,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[styles.gradient, isMap && styles.gradientMap]}>
        <View style={styles.contentRow}>
          {leadingIcon ? (
            <Text style={[styles.leadingIcon, isMap && styles.leadingIconMap]}>
              {leadingIcon}
            </Text>
          ) : null}
          <Text style={[styles.label, isMap && styles.labelMap]}>{label}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: spacingLattice.radiusXl,
    overflow: 'hidden',
    shadowColor: chromaVault.accentGlacial,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacingLattice.radiusXl,
    height: 56,
  },
  gradientMap: {
    borderRadius: spacingLattice.radiusLg,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingLattice.unitSm,
  },
  leadingIcon: {
    fontSize: 16,
    color: chromaVault.textHighEmphasis,
  },
  leadingIconMap: {
    color: chromaVault.actionLabelOnFill,
    fontSize: 18,
  },
  label: {
    ...typographyMold.buttonLabel,
  },
  labelMap: {
    ...typographyMold.buttonLabelMap,
  },
});
