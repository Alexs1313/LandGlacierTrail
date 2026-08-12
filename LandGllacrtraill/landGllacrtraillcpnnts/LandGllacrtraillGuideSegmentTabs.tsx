import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GuideSegment} from './LandGllacrtraillguideSchema';
import {LandGllacrtraillScalePressable} from './LandGllacrtraillScalePressable';

type Props = {
  activeSegment: GuideSegment;
  onChange: (segment: GuideSegment) => void;
};

const landGllacrtraillSegments: {key: GuideSegment; label: string}[] = [
  {key: 'articles', label: 'Articles'},
  {key: 'safety', label: 'Safety'},
  {key: 'checklist', label: 'Checklist'},
];

export function LandGllacrtraillGuideSegmentTabs({activeSegment, onChange}: Props) {
  return (
    <View style={styles.landGllacrtraillTrack}>
      {landGllacrtraillSegments.map(seg => {
        const landGllacrtraillIsActive = activeSegment === seg.key;
        return (
          <LandGllacrtraillScalePressable
            key={seg.key}
            onPress={() => onChange(seg.key)}
            pressScale={0.92}
            style={styles.landGllacrtraillTabPressable}
            animateStyle={[
              styles.landGllacrtraillTab,
              landGllacrtraillIsActive && styles.landGllacrtraillTabActive,
            ]}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.85}
              style={[
                styles.label,
                landGllacrtraillIsActive && styles.landGllacrtraillLabelActive,
              ]}>
              {seg.label}
            </Text>
          </LandGllacrtraillScalePressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillTrack: {
    flexDirection: 'row',
    backgroundColor: 'rgba(61, 184, 240, 0.07)',
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.12)',
    borderRadius: 14,
    padding: 5,
    gap: 0,
  },
  landGllacrtraillTabPressable: {
    flex: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  landGllacrtraillTab: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 10,
  },
  landGllacrtraillTabActive: {
    backgroundColor: '#3DB8F0',
  },
  label: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 13,
    letterSpacing: 0.52,
    color: '#7AB3CC',
    textAlign: 'center',
  },
  landGllacrtraillLabelActive: {
    fontFamily: 'BarlowCondensed-SemiBold',
    color: '#060F1E',
  },
});
