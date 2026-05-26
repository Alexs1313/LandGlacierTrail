import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {chromaVault} from '../palette/chromaVault';
import {fontFamily} from '../palette/typographyMold';

type Props = {
  isSelected: boolean;
  isPriority: boolean;
  label?: string;
};

const PIN_WIDTH = 168;
const PIN_HEIGHT = 72;
const BEACON_SIZE = 46;

export function MapGlacierMarker({isSelected, isPriority, label}: Props) {
  return (
    <View style={styles.pinShell} collapsable={false}>
      {isSelected && label ? (
        <View style={styles.labelSlot}>
          <Text style={styles.selectedLabel} numberOfLines={2}>
            {label}
          </Text>
        </View>
      ) : (
        <View style={styles.labelSlot} />
      )}

      <View style={styles.beaconSlot}>
        {isSelected ? (
          <>
            <View style={styles.selectedOuterRing} />
            <View style={styles.selectedInnerDisc} />
            <View style={styles.selectedCore} />
          </>
        ) : isPriority ? (
          <View style={styles.priorityWrap}>
            <View style={styles.priorityHalo} />
            <View style={styles.priorityRing} />
            <View style={styles.priorityCore} />
          </View>
        ) : (
          <View style={styles.idleWrap}>
            <View style={styles.idleHalo} />
            <View style={styles.idleDot} />
          </View>
        )}
      </View>
    </View>
  );
}

const SELECTED_INNER = 28;
const SELECTED_CORE = 8;

const styles = StyleSheet.create({
  pinShell: {
    width: PIN_WIDTH,
    height: PIN_HEIGHT,
    alignItems: 'center',
  },
  labelSlot: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 6,
  },
  beaconSlot: {
    width: BEACON_SIZE,
    height: BEACON_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  idleWrap: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  idleHalo: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: chromaVault.accentGlacialGlow,
  },
  idleDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: chromaVault.accentGlacial,
    borderWidth: 2,
    borderColor: chromaVault.accentGlacialSoft,
  },
  priorityWrap: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priorityHalo: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: chromaVault.statusGoldSurface,
  },
  priorityRing: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: chromaVault.statusGold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priorityCore: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: chromaVault.textHighEmphasis,
  },
  selectedLabel: {
    fontFamily: fontFamily.bold,
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0.2,
    color: chromaVault.textHighEmphasis,
    textAlign: 'center',
    maxWidth: PIN_WIDTH,
  },
  selectedOuterRing: {
    position: 'absolute',
    width: BEACON_SIZE,
    height: BEACON_SIZE,
    borderRadius: BEACON_SIZE / 2,
    borderWidth: 2,
    borderColor: chromaVault.accentGlacial,
    backgroundColor: 'transparent',
  },
  selectedInnerDisc: {
    width: SELECTED_INNER,
    height: SELECTED_INNER,
    borderRadius: SELECTED_INNER / 2,
    backgroundColor: chromaVault.accentGlacial,
  },
  selectedCore: {
    position: 'absolute',
    width: SELECTED_CORE,
    height: SELECTED_CORE,
    borderRadius: SELECTED_CORE / 2,
    backgroundColor: chromaVault.textHighEmphasis,
  },
});
