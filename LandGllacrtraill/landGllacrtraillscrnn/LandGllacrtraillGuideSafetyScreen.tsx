import React from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {resolveSafetyByKey} from '../landGllacrtraillcpnnts/LandGllacrtraillguideCatalog';
import type {RootStackParamList} from '../landGllacrtraillroutts/LandGllacrtrailltypes';
import {typographyMold} from '../landGllacrtraillcpnnts/LandGllacrtrailltypographyMold';

type Props = StackScreenProps<RootStackParamList, 'GuideSafety'>;

export function LandGllacrtraillGuideSafetyScreen({navigation, route}: Props) {
  const landGllacrtraillNote = resolveSafetyByKey(route.params.safetyKey);

  if (!landGllacrtraillNote) {
    return (
      <View style={styles.landGllacrtraillMissing}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.landGllacrtraillBackLabel}>← Back</Text>
        </Pressable>
      </View>
    );
  }

  const landGllacrtraillParagraphs =
    landGllacrtraillNote.bodyContent.split('\n\n');

  return (
    <View style={styles.landGllacrtraillRoot}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.landGllacrtraillScrollContent}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.landGllacrtraillRoundControl}>
          <Text
            style={[
              styles.landGllacrtraillRoundControlIcon,
              Platform.OS === 'android' && {bottom: 4},
            ]}>
            ←
          </Text>
        </Pressable>

        <View style={styles.landGllacrtraillSafetyHeader}>
          <View style={styles.landGllacrtraillShieldWrap}>
            <Text style={styles.landGllacrtraillShield}>🛡</Text>
          </View>
          <Text style={styles.landGllacrtraillSafetyLabel}>
            SAFETY INFORMATION
          </Text>
        </View>

        <Text style={styles.landGllacrtraillTitle}>
          {landGllacrtraillNote.title}
        </Text>
        <View style={styles.landGllacrtraillDivider} />

        {landGllacrtraillParagraphs.map((paragraph, index) => (
          <Text key={index} style={styles.landGllacrtraillParagraph}>
            {paragraph}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillRoot: {
    flex: 1,
    backgroundColor: '#060F1E',
  },
  landGllacrtraillMissing: {
    flex: 1,
    backgroundColor: '#060F1E',
    padding: 20,
  },
  landGllacrtraillBackLabel: {
    ...typographyMold.linkAction,
  },
  landGllacrtraillScrollContent: {
    paddingTop: 60,
    paddingBottom: 32 + 32,
    paddingHorizontal: 20,
    gap: 12,
  },
  landGllacrtraillRoundControl: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(6, 15, 30, 0.65)',
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  landGllacrtraillRoundControlIcon: {
    fontSize: 18,
    color: '#E8F4FC',
  },
  landGllacrtraillSafetyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  landGllacrtraillShieldWrap: {
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
  landGllacrtraillSafetyLabel: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 12,
    letterSpacing: 1.2,
    color: '#D63333',
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingDetail,
    fontSize: 26,
    lineHeight: 33,
  },
  landGllacrtraillDivider: {
    height: 1,
    backgroundColor: 'rgba(61, 184, 240, 0.12)',
    marginVertical: 4.2,
  },
  landGllacrtraillParagraph: {
    ...typographyMold.bodyNarrative,
  },
});
