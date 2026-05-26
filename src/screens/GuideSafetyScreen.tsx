import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {resolveSafetyByKey} from '../data/guideCatalog';
import type {NotesStackParamList} from '../navigation/NotesStackNavigator';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {fontFamily, typographyMold} from '../palette/typographyMold';

type Props = StackScreenProps<NotesStackParamList, 'GuideSafety'>;

export function GuideSafetyScreen({navigation, route}: Props) {
  const note = resolveSafetyByKey(route.params.safetyKey);

  if (!note) {
    return (
      <View style={styles.missing}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backLabel}>← Back</Text>
        </Pressable>
      </View>
    );
  }

  const paragraphs = note.bodyContent.split('\n\n');

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <Pressable onPress={() => navigation.goBack()} style={styles.roundControl}>
          <Text style={styles.roundControlIcon}>←</Text>
        </Pressable>

        <View style={styles.safetyHeader}>
          <View style={styles.shieldWrap}>
            <Text style={styles.shield}>🛡</Text>
          </View>
          <Text style={styles.safetyLabel}>SAFETY INFORMATION</Text>
        </View>

        <Text style={styles.title}>{note.title}</Text>
        <View style={styles.divider} />

        {paragraphs.map((paragraph, index) => (
          <Text key={index} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: chromaVault.surfacePrimary,
  },
  missing: {
    flex: 1,
    backgroundColor: chromaVault.surfacePrimary,
    padding: spacingLattice.unitXl,
  },
  backLabel: {
    ...typographyMold.linkAction,
  },
  scrollContent: {
    paddingTop: spacingLattice.screenTop,
    paddingBottom: spacingLattice.screenBottom + spacingLattice.unit3xl,
    paddingHorizontal: spacingLattice.unitXl,
    gap: spacingLattice.unitMd,
  },
  roundControl: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: chromaVault.surfaceGlass,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorderStrong,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginBottom: spacingLattice.unitMd,
  },
  roundControlIcon: {
    fontSize: 18,
    color: chromaVault.textHighEmphasis,
  },
  safetyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingLattice.unitMd,
    marginBottom: spacingLattice.unitSm,
  },
  shieldWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: chromaVault.statusSignalBorder,
    backgroundColor: 'rgba(214, 51, 51, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shield: {
    fontSize: 20,
    color: chromaVault.statusSignal,
  },
  safetyLabel: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    letterSpacing: 1.2,
    color: chromaVault.statusSignal,
  },
  title: {
    ...typographyMold.headingDetail,
    fontSize: 26,
    lineHeight: 33,
  },
  divider: {
    height: 1,
    backgroundColor: chromaVault.dividerSubtle,
    marginVertical: spacingLattice.unitXs,
  },
  paragraph: {
    ...typographyMold.bodyNarrative,
  },
});
