import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  isSelected: boolean;
  isPriority: boolean;
  label?: string;
};

const PIN_WIDTH = 168;
const PIN_HEIGHT = 72;
const BEACON_SIZE = 46;

export function LandGllacrtraillMapGlacierMarker({isSelected, isPriority, label}: Props) {
  return (
    <View style={styles.landGllacrtraillPinShell} collapsable={false}>
      {isSelected && label ? (
        <View style={styles.landGllacrtraillLabelSlot}>
          <Text style={styles.landGllacrtraillSelectedLabel} numberOfLines={2}>
            {label}
          </Text>
        </View>
      ) : (
        <View style={styles.landGllacrtraillLabelSlot} />
      )}

      <View style={styles.landGllacrtraillBeaconSlot}>
        {isSelected ? (
          <>
            <View style={styles.landGllacrtraillSelectedOuterRing} />
            <View style={styles.landGllacrtraillSelectedInnerDisc} />
            <View style={styles.landGllacrtraillSelectedCore} />
          </>
        ) : isPriority ? (
          <View style={styles.landGllacrtraillPriorityWrap}>
            <View style={styles.landGllacrtraillPriorityHalo} />
            <View style={styles.landGllacrtraillPriorityRing} />
            <View style={styles.landGllacrtraillPriorityCore} />
          </View>
        ) : (
          <View style={styles.landGllacrtraillIdleWrap}>
            <View style={styles.landGllacrtraillIdleHalo} />
            <View style={styles.landGllacrtraillIdleDot} />
          </View>
        )}
      </View>
    </View>
  );
}

const SELECTED_INNER = 28;
const SELECTED_CORE = 8;

const styles = StyleSheet.create({
  landGllacrtraillPinShell: {
    width: PIN_WIDTH,
    height: PIN_HEIGHT,
    alignItems: 'center',
  },
  landGllacrtraillLabelSlot: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 6,
  },
  landGllacrtraillBeaconSlot: {
    width: BEACON_SIZE,
    height: BEACON_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  landGllacrtraillIdleWrap: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  landGllacrtraillIdleHalo: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(61, 184, 240, 0.25)',
  },
  landGllacrtraillIdleDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3DB8F0',
    borderWidth: 2,
    borderColor: '#7AD4F5',
  },
  landGllacrtraillPriorityWrap: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  landGllacrtraillPriorityHalo: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(240, 200, 67, 0.2)',
  },
  landGllacrtraillPriorityRing: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#F0C843',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landGllacrtraillPriorityCore: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E8F4FC',
  },
  landGllacrtraillSelectedLabel: {
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0.2,
    color: '#E8F4FC',
    textAlign: 'center',
    maxWidth: PIN_WIDTH,
  },
  landGllacrtraillSelectedOuterRing: {
    position: 'absolute',
    width: BEACON_SIZE,
    height: BEACON_SIZE,
    borderRadius: BEACON_SIZE / 2,
    borderWidth: 2,
    borderColor: '#3DB8F0',
    backgroundColor: 'transparent',
  },
  landGllacrtraillSelectedInnerDisc: {
    width: SELECTED_INNER,
    height: SELECTED_INNER,
    borderRadius: SELECTED_INNER / 2,
    backgroundColor: '#3DB8F0',
  },
  landGllacrtraillSelectedCore: {
    position: 'absolute',
    width: SELECTED_CORE,
    height: SELECTED_CORE,
    borderRadius: SELECTED_CORE / 2,
    backgroundColor: '#E8F4FC',
  },
});
