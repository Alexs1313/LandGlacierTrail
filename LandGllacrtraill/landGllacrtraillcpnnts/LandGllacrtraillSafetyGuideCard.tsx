import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {GuideSafetyNote} from './LandGllacrtraillguideSchema';

import {typographyMold} from './LandGllacrtrailltypographyMold';

type Props = {
  note: GuideSafetyNote;
  onPress: () => void;
};

export function LandGllacrtraillSafetyGuideCard({note, onPress}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.landGllacrtraillCard}>
      <View style={styles.landGllacrtraillIconWrap}>
        <Text style={styles.landGllacrtraillShield}>🛡</Text>
      </View>
      <View style={styles.landGllacrtraillBody}>
        <Text style={styles.landGllacrtraillTitle}>{note.title}</Text>
        <Text style={styles.landGllacrtraillPreview} numberOfLines={3}>
          {note.previewText}
        </Text>
        <View style={styles.landGllacrtraillLinkRow}>
          <Text style={styles.landGllacrtraillLink}>Read more</Text>
          <Text style={styles.landGllacrtraillChevron}>›</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillCard: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#0D1E35',
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.12)',
  },
  landGllacrtraillIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(214, 51, 51, 0.35)',
    backgroundColor: 'rgba(214, 51, 51, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landGllacrtraillShield: {
    fontSize: 20,
    color: '#D63333',
  },
  landGllacrtraillBody: {
    flex: 1,
    gap: 8,
  },
  landGllacrtraillTitle: {
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 18,
    lineHeight: 22.5,
    color: '#E8F4FC',
  },
  landGllacrtraillPreview: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 13,
    lineHeight: 19.5,
    color: '#7AB3CC',
  },
  landGllacrtraillLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4.2,
  },
  landGllacrtraillLink: {
    ...typographyMold.linkAction,
  },
  landGllacrtraillChevron: {
    fontSize: 16,
    color: '#3DB8F0',
    marginTop: -1,
  },
});
