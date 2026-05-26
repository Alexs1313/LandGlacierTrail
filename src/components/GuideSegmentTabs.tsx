import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GuideSegment} from '../types/guideSchema';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {fontFamily} from '../palette/typographyMold';

type Props = {
  activeSegment: GuideSegment;
  onChange: (segment: GuideSegment) => void;
};

const segments: {key: GuideSegment; label: string}[] = [
  {key: 'articles', label: 'Articles'},
  {key: 'safety', label: 'Safety'},
  {key: 'checklist', label: 'Checklist'},
];

export function GuideSegmentTabs({activeSegment, onChange}: Props) {
  return (
    <View style={styles.track}>
      {segments.map(seg => {
        const isActive = activeSegment === seg.key;
        return (
          <Pressable
            key={seg.key}
            onPress={() => onChange(seg.key)}
            style={[styles.tab, isActive && styles.tabActive]}>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {seg.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    flexDirection: 'row',
    backgroundColor: 'rgba(61, 184, 240, 0.07)',
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorder,
    borderRadius: spacingLattice.radiusLg,
    padding: 5,
    gap: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 10,
  },
  tabActive: {
    backgroundColor: chromaVault.accentGlacial,
  },
  label: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    letterSpacing: 0.52,
    color: chromaVault.textSector,
  },
  labelActive: {
    fontFamily: fontFamily.semiBold,
    color: chromaVault.actionLabelOnFill,
  },
});
