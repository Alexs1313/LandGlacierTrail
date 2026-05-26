import React, {useCallback, useEffect, useState} from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {StackScreenProps} from '@react-navigation/stack';
import {resolveFormationVisual} from '../assets/visualRegistry';
import {AssessmentBadge} from '../components/AssessmentBadge';
import {GhostActionControl} from '../components/GhostActionControl';
import {InfoDisplayCard} from '../components/InfoDisplayCard';
import {PrimaryActionControl} from '../components/PrimaryActionControl';
import {
  formatCoordinatePair,
  kindDisplayMap,
  resolveEntryByKey,
} from '../data/formationCatalog';
import {
  readSelectedItems,
  toggleSelectedItem,
} from '../loungeKit/persistenceGate';
import {openMapLocation} from '../navigation/openMapLocation';
type FormationDetailRouteParams = {
  FormationDetail: {entryKey: string};
};
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';

type Props = StackScreenProps<FormationDetailRouteParams, 'FormationDetail'>;

export function FormationDetailScreen({navigation, route}: Props) {
  const entry = resolveEntryByKey(route.params.entryKey);
  const [isMarked, setIsMarked] = useState(false);

  const loadMark = useCallback(async () => {
    if (!entry) {
      return;
    }
    const keys = await readSelectedItems();
    setIsMarked(keys.includes(entry.entryKey));
  }, [entry]);

  useEffect(() => {
    loadMark();
  }, [loadMark]);

  if (!entry) {
    return (
      <View style={styles.missing}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backLabel}>← Back</Text>
        </Pressable>
      </View>
    );
  }

  const visual = resolveFormationVisual(entry.visualAssetKey);
  const kindLabel = kindDisplayMap[entry.formationKind];
  const coordinates = formatCoordinatePair(entry.latitude, entry.longitude);

  const handleMark = async () => {
    await toggleSelectedItem(entry.entryKey);
    await loadMark();
  };

  const handleShare = () => {
    Share.share({
      message: `${entry.displayLabel}\n${entry.sectorLabel}\n${entry.briefNarrative}`,
    });
  };

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.hero}>
          <ImageBackground
            source={visual}
            style={styles.heroImage}
            resizeMode="cover">
            <LinearGradient
              colors={[
                chromaVault.overlayHeroTop,
                'rgba(0,0,0,0)',
                'rgb(0, 1, 8)',
              ]}
              locations={[0, 0.4, 1]}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.heroControls}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.roundControl}>
                <Text style={styles.roundControlIcon}>←</Text>
              </Pressable>
              <Pressable onPress={handleMark} style={styles.roundControl}>
                <Text
                  style={[
                    styles.roundControlIcon,
                    isMarked && styles.roundControlIconSaved,
                  ]}>
                  {isMarked ? '★' : '☆'}
                </Text>
              </Pressable>
            </View>
            <View style={styles.heroKind}>
              <Text style={styles.heroKindText}>{kindLabel}</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.body}>
          <PrimaryActionControl
            variant="map"
            label="VIEW ON MAP"
            leadingIcon="➤"
            onPress={() => openMapLocation(navigation, entry.entryKey)}
            style={styles.mapAction}
          />

          <View style={styles.titleRow}>
            <Text style={styles.title}>{entry.displayLabel}</Text>
            <AssessmentBadge value={entry.assessmentValue} />
          </View>

          <View style={styles.sectorRow}>
            <Text style={styles.sectorIcon}>◎</Text>
            <Text style={styles.sector}>{entry.sectorLabel}</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.brief}>{entry.briefNarrative}</Text>
          <Text style={styles.extended}>{entry.extendedNarrative}</Text>

          <View style={styles.infoRow}>
            <InfoDisplayCard label="COORDINATES" value={coordinates} />
            <InfoDisplayCard label="REGION" value={entry.sectorLabel} />
          </View>

          <View style={styles.ghostRow}>
            <GhostActionControl
              label={isMarked ? 'Saved' : 'Save'}
              icon={isMarked ? '★' : '☆'}
              isHighlighted={isMarked}
              onPress={handleMark}
            />
            <GhostActionControl label="Share" icon="↗" onPress={handleShare} />
          </View>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  backLabel: {
    color: chromaVault.accentGlacial,
    fontFamily: typographyMold.linkAction.fontFamily,
  },
  scrollContent: {
    paddingBottom: spacingLattice.screenBottom + spacingLattice.unit2xl,
  },
  hero: {
    height: 290,
  },
  heroImage: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heroControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: spacingLattice.screenTop,
    paddingHorizontal: spacingLattice.unitLg,
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
  },
  roundControlIcon: {
    fontSize: 18,
    color: chromaVault.textHighEmphasis,
  },
  roundControlIconSaved: {
    color: chromaVault.statusGold,
  },
  heroKind: {
    alignSelf: 'flex-start',
    marginLeft: spacingLattice.unitLg,
    marginBottom: spacingLattice.unitLg,
    backgroundColor: chromaVault.surfaceBadge,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorderStrong,
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: spacingLattice.radiusPill,
  },
  heroKindText: {
    ...typographyMold.kindPill,
  },
  body: {
    paddingHorizontal: spacingLattice.unitXl,
    paddingTop: spacingLattice.unitMd,
    gap: spacingLattice.unitMd,
  },
  mapAction: {
    marginTop: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacingLattice.unitSm,
  },
  title: {
    ...typographyMold.headingDetail,
    flex: 1,
  },
  sectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingLattice.unitSm,
  },
  sectorIcon: {
    fontSize: 13,
    color: chromaVault.accentGlacial,
  },
  sector: {
    fontFamily: typographyMold.bodyRow.fontFamily,
    fontSize: 13,
    color: chromaVault.textSector,
  },
  divider: {
    height: 1,
    backgroundColor: chromaVault.dividerSubtle,
  },
  brief: {
    ...typographyMold.bodyBrief,
  },
  extended: {
    ...typographyMold.bodyNarrative,
  },
  infoRow: {
    flexDirection: 'row',
    gap: spacingLattice.unitMd,
  },
  ghostRow: {
    flexDirection: 'row',
    gap: spacingLattice.unitMd,
    marginTop: spacingLattice.unitSm,
  },
});
