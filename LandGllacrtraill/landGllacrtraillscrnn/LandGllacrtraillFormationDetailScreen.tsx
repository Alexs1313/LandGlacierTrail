import React, {useCallback, useEffect, useState} from 'react';
import {
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {StackScreenProps} from '@react-navigation/stack';
import {resolveFormationVisual} from '../landGllacrtraillcpnnts/LandGllacrtraillvisualRegistry';
import {LandGllacrtraillAssessmentBadge} from '../landGllacrtraillcpnnts/LandGllacrtraillAssessmentBadge';
import {LandGllacrtraillGhostActionControl} from '../landGllacrtraillcpnnts/LandGllacrtraillGhostActionControl';
import {LandGllacrtraillInfoDisplayCard} from '../landGllacrtraillcpnnts/LandGllacrtraillInfoDisplayCard';
import {LandGllacrtraillPrimaryActionControl} from '../landGllacrtraillcpnnts/LandGllacrtraillPrimaryActionControl';
import {
  formatCoordinatePair,
  kindDisplayMap,
  resolveEntryByKey,
} from '../landGllacrtraillcpnnts/LandGllacrtraillformationCatalog';
import {
  readSelectedItems,
  toggleSelectedItem,
} from '../landGllacrtraillcpnnts/LandGllacrtraillpersistenceGate';
import {LandGllacrtraillopenMapLocation} from '../landGllacrtraillroutts/LandGllacrtraillopenMapLocation';
type FormationDetailRouteParams = {
  FormationDetail: {entryKey: string};
};
import {typographyMold} from '../landGllacrtraillcpnnts/LandGllacrtrailltypographyMold';

type Props = StackScreenProps<FormationDetailRouteParams, 'FormationDetail'>;

export function LandGllacrtraillFormationDetailScreen({
  navigation,
  route,
}: Props) {
  const landGllacrtraillEntry = resolveEntryByKey(route.params.entryKey);
  const [isMarked, setIsMarked] = useState(false);

  const landGllacrtraillLoadMark = useCallback(async () => {
    if (!landGllacrtraillEntry) {
      return;
    }
    const landGllacrtraillKeys = await readSelectedItems();
    setIsMarked(landGllacrtraillKeys.includes(landGllacrtraillEntry.entryKey));
  }, [landGllacrtraillEntry]);

  useEffect(() => {
    landGllacrtraillLoadMark();
  }, [landGllacrtraillLoadMark]);

  if (!landGllacrtraillEntry) {
    return (
      <View style={styles.landGllacrtraillMissing}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.landGllacrtraillBackLabel}>← Back</Text>
        </Pressable>
      </View>
    );
  }

  const landGllacrtraillVisual = resolveFormationVisual(
    landGllacrtraillEntry.visualAssetKey,
  );
  const landGllacrtraillKindLabel =
    kindDisplayMap[landGllacrtraillEntry.formationKind];
  const landGllacrtraillCoordinates = formatCoordinatePair(
    landGllacrtraillEntry.latitude,
    landGllacrtraillEntry.longitude,
  );

  const landGllacrtraillHandleMark = async () => {
    await toggleSelectedItem(landGllacrtraillEntry.entryKey);
    await landGllacrtraillLoadMark();
  };

  const landGllacrtraillHandleShare = () => {
    Share.share({
      message: `${landGllacrtraillEntry.displayLabel}\n${landGllacrtraillEntry.sectorLabel}\n${landGllacrtraillEntry.briefNarrative}`,
    });
  };

  return (
    <View style={styles.landGllacrtraillRoot}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.landGllacrtraillScrollContent}>
        <View style={styles.landGllacrtraillHero}>
          <ImageBackground
            source={landGllacrtraillVisual}
            style={styles.landGllacrtraillHeroImage}
            resizeMode="cover">
            <LinearGradient
              colors={['rgba(6, 15, 30, 0.5)', 'rgba(0,0,0,0)', 'rgb(0, 1, 8)']}
              locations={[0, 0.4, 1]}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.landGllacrtraillHeroControls}>
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
              <Pressable
                onPress={landGllacrtraillHandleMark}
                style={styles.landGllacrtraillRoundControl}>
                <Text
                  style={[
                    styles.landGllacrtraillRoundControlIcon,
                    isMarked && styles.landGllacrtraillRoundControlIconSaved,
                    Platform.OS === 'android' && {bottom: 2},
                  ]}>
                  {isMarked ? '★' : '☆'}
                </Text>
              </Pressable>
            </View>
            <View style={styles.landGllacrtraillHeroKind}>
              <Text style={styles.landGllacrtraillHeroKindText}>
                {landGllacrtraillKindLabel}
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.landGllacrtraillBody}>
          <LandGllacrtraillPrimaryActionControl
            variant="map"
            label="VIEW ON MAP"
            leadingIcon="➤"
            onPress={() =>
              LandGllacrtraillopenMapLocation(
                navigation,
                landGllacrtraillEntry.entryKey,
              )
            }
            style={styles.landGllacrtraillMapAction}
          />

          <View style={styles.landGllacrtraillTitleRow}>
            <Text style={styles.landGllacrtraillTitle}>
              {landGllacrtraillEntry.displayLabel}
            </Text>
            <LandGllacrtraillAssessmentBadge
              value={landGllacrtraillEntry.assessmentValue}
            />
          </View>

          <View style={styles.landGllacrtraillSectorRow}>
            <Text style={styles.landGllacrtraillSectorIcon}>◎</Text>
            <Text style={styles.landGllacrtraillSector}>
              {landGllacrtraillEntry.sectorLabel}
            </Text>
          </View>

          <View style={styles.landGllacrtraillDivider} />

          <Text style={styles.landGllacrtraillBrief}>
            {landGllacrtraillEntry.briefNarrative}
          </Text>
          <Text style={styles.landGllacrtraillExtended}>
            {landGllacrtraillEntry.extendedNarrative}
          </Text>

          <View style={styles.landGllacrtraillInfoRow}>
            <LandGllacrtraillInfoDisplayCard
              label="COORDINATES"
              value={landGllacrtraillCoordinates}
            />
            <LandGllacrtraillInfoDisplayCard
              label="REGION"
              value={landGllacrtraillEntry.sectorLabel}
            />
          </View>

          <View style={styles.landGllacrtraillGhostRow}>
            <LandGllacrtraillGhostActionControl
              label={isMarked ? 'Saved' : 'Save'}
              icon={isMarked ? '★' : '☆'}
              isHighlighted={isMarked}
              onPress={landGllacrtraillHandleMark}
            />
            <LandGllacrtraillGhostActionControl
              label="Share"
              icon="↗"
              onPress={landGllacrtraillHandleShare}
            />
          </View>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  landGllacrtraillBackLabel: {
    color: '#3DB8F0',
    fontFamily: 'BarlowCondensed-Regular',
  },
  landGllacrtraillScrollContent: {
    paddingBottom: 32 + 24,
  },
  landGllacrtraillHero: {
    height: 290,
  },
  landGllacrtraillHeroImage: {
    flex: 1,
    justifyContent: 'space-between',
  },
  landGllacrtraillHeroControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 16,
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
  },
  landGllacrtraillRoundControlIcon: {
    fontSize: 18,
    color: '#E8F4FC',
  },
  landGllacrtraillRoundControlIconSaved: {
    color: '#F0C843',
  },
  landGllacrtraillHeroKind: {
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(6, 15, 30, 0.7)',
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.25)',
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 999,
  },
  landGllacrtraillHeroKindText: {
    ...typographyMold.kindPill,
  },
  landGllacrtraillBody: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 12,
  },
  landGllacrtraillMapAction: {
    marginTop: 4,
  },
  landGllacrtraillTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingDetail,
    flex: 1,
  },
  landGllacrtraillSectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  landGllacrtraillSectorIcon: {
    fontSize: 13,
    color: '#3DB8F0',
  },
  landGllacrtraillSector: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 13,
    color: '#7AB3CC',
  },
  landGllacrtraillDivider: {
    height: 1,
    backgroundColor: 'rgba(61, 184, 240, 0.12)',
  },
  landGllacrtraillBrief: {
    ...typographyMold.bodyBrief,
  },
  landGllacrtraillExtended: {
    ...typographyMold.bodyNarrative,
  },
  landGllacrtraillInfoRow: {
    flexDirection: 'row',
    gap: 12,
  },
  landGllacrtraillGhostRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
});
