import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {resolveFormationVisual} from '../assets/visualRegistry';
import {kindDisplayMap} from '../data/formationCatalog';
import {FormationEntry} from '../types/entrySchema';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';
import {AssessmentBadge} from './AssessmentBadge';

type Props = {
  entry: FormationEntry;
  onPress?: () => void;
};

export function DiscoveryCardLarge({entry, onPress}: Props) {
  const source = resolveFormationVisual(entry.visualAssetKey);
  const kindLabel = kindDisplayMap[entry.formationKind];

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <ImageBackground
        source={source}
        style={styles.image}
        imageStyle={styles.imageRadius}>
        <LinearGradient
          colors={[
            'rgba(6,15,30,0)',
            'rgba(6,15,30,0.3)',
            chromaVault.overlayFeatured,
          ]}
          locations={[0, 0.6, 1]}
          style={styles.gradient}>
          <View style={{padding: 15, justifyContent: 'space-between', flex: 1}}>
            <View style={styles.topRow}>
              {entry.priorityLevel ? (
                <View style={styles.featuredBadge}>
                  <View style={styles.featuredDot} />
                  <Text style={styles.featuredText}>FEATURED</Text>
                </View>
              ) : (
                <View />
              )}
            </View>
            <View style={styles.bottom}>
              <View style={styles.kindBadge}>
                <Text style={styles.kindText}>{kindLabel}</Text>
              </View>
              <Text style={styles.title}>{entry.displayLabel}</Text>
              <View style={styles.metaRow}>
                <AssessmentBadge value={entry.assessmentValue} />
                <Text style={styles.sector}>{entry.sectorLabel}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: spacingLattice.radiusXl,
    overflow: 'hidden',
    height: 190,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorder,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderRadius: spacingLattice.radiusXl,
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  kindBadge: {
    alignSelf: 'flex-start',
    backgroundColor: chromaVault.surfaceGlassLight,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorderStrong,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: spacingLattice.radiusPill,
    marginBottom: spacingLattice.unitSm,
  },
  kindText: {
    ...typographyMold.kindPill,
  },
  featuredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: chromaVault.statusGoldSurface,
    borderWidth: 1,
    borderColor: chromaVault.statusGoldBorder,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: spacingLattice.radiusPill,
    gap: 4,
  },
  featuredDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: chromaVault.statusGold,
  },
  featuredText: {
    fontSize: 11,
    fontFamily: typographyMold.captionSmall.fontFamily,
    color: chromaVault.statusGold,
    letterSpacing: 0.5,
  },
  bottom: {
    gap: spacingLattice.unitXs,
  },
  title: {
    ...typographyMold.headingCard,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingLattice.unitSm,
  },
  sector: {
    fontFamily: typographyMold.bodyRow.fontFamily,
    fontSize: 12,
    color: chromaVault.textMuted,
  },
});
