import React, {useCallback, useEffect, useState} from 'react';
import {
  ImageBackground,
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {StackScreenProps} from '@react-navigation/stack';
import {LandGllacrtraillFadeInView} from '../landGllacrtraillcpnnts/LandGllacrtraillFadeInView';
import {LandGllacrtraillGhostActionControl} from '../landGllacrtraillcpnnts/LandGllacrtraillGhostActionControl';
import {LandGllacrtraillScalePressable} from '../landGllacrtraillcpnnts/LandGllacrtraillScalePressable';
import {resolveGuideArticleVisual} from '../landGllacrtraillcpnnts/LandGllacrtraillvisualRegistry';
import {resolveArticleByKey} from '../landGllacrtraillcpnnts/LandGllacrtraillguideCatalog';
import {
  readSavedArticles,
  toggleSavedArticle,
} from '../landGllacrtraillcpnnts/LandGllacrtraillpersistenceGate';
import type {RootStackParamList} from '../landGllacrtraillroutts/LandGllacrtrailltypes';
import {typographyMold} from '../landGllacrtraillcpnnts/LandGllacrtrailltypographyMold';

type Props = StackScreenProps<RootStackParamList, 'GuideArticle'>;

export function LandGllacrtraillGuideArticleScreen({navigation, route}: Props) {
  const landGllacrtraillArticle = resolveArticleByKey(route.params.articleKey);
  const [isSaved, setIsSaved] = useState(false);

  const landGllacrtraillLoadSaved = useCallback(async () => {
    if (!landGllacrtraillArticle) {
      return;
    }
    const landGllacrtraillKeys = await readSavedArticles();
    setIsSaved(landGllacrtraillKeys.includes(landGllacrtraillArticle.articleKey));
  }, [landGllacrtraillArticle]);

  useEffect(() => {
    landGllacrtraillLoadSaved();
  }, [landGllacrtraillLoadSaved]);

  if (!landGllacrtraillArticle) {
    return (
      <View style={styles.landGllacrtraillMissing}>
        <LandGllacrtraillScalePressable onPress={() => navigation.goBack()}>
          <Text style={styles.landGllacrtraillBackLabel}>← Back</Text>
        </LandGllacrtraillScalePressable>
      </View>
    );
  }

  const landGllacrtraillVisual = resolveGuideArticleVisual(
    landGllacrtraillArticle.visualAssetKey,
  );
  const landGllacrtraillParagraphs =
    landGllacrtraillArticle.bodyContent.split('\n\n');

  const landGllacrtraillHandleSave = async () => {
    await toggleSavedArticle(landGllacrtraillArticle.articleKey);
    await landGllacrtraillLoadSaved();
  };

  const landGllacrtraillHandleShare = () => {
    Share.share({
      message: `${landGllacrtraillArticle.title}\n\n${landGllacrtraillArticle.previewText}`,
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
              colors={[
                'rgba(6,15,30,0.5)',
                'rgba(0,0,0,0)',
                'rgba(6,15,30,0.95)',
              ]}
              locations={[0, 0.35, 1]}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.landGllacrtraillHeroControls}>
              <LandGllacrtraillScalePressable
                onPress={() => navigation.goBack()}
                pressScale={0.85}
                animateStyle={styles.landGllacrtraillRoundControl}>
                <Text
                  style={[
                    styles.landGllacrtraillRoundControlIcon,
                    Platform.OS === 'android' && {bottom: 4},
                  ]}>
                  ←
                </Text>
              </LandGllacrtraillScalePressable>
              <LandGllacrtraillScalePressable
                onPress={landGllacrtraillHandleSave}
                pressScale={0.85}
                animateStyle={styles.landGllacrtraillRoundControl}>
                <Text
                  style={[
                    styles.landGllacrtraillRoundControlIcon,
                    isSaved && styles.landGllacrtraillRoundControlIconSaved,
                    Platform.OS === 'android' && {bottom: 2},
                  ]}>
                  {isSaved ? '♥' : '♡'}
                </Text>
              </LandGllacrtraillScalePressable>
            </View>
          </ImageBackground>
        </View>

        <LandGllacrtraillFadeInView delay={200} style={styles.landGllacrtraillBody}>
          <View style={styles.landGllacrtraillMetaRow}>
            <Text style={styles.landGllacrtraillDate}>
              {landGllacrtraillArticle.publishedLabel}
            </Text>
            <Text style={styles.landGllacrtraillDot}>·</Text>
            <Text style={styles.landGllacrtraillReadTime}>
              {landGllacrtraillArticle.readMinutes} min read
            </Text>
          </View>
          <Text style={styles.landGllacrtraillTitle}>
            {landGllacrtraillArticle.title}
          </Text>
          <View style={styles.landGllacrtraillDivider} />
          {landGllacrtraillParagraphs.map((paragraph, index) => (
            <Text key={index} style={styles.landGllacrtraillParagraph}>
              {paragraph}
            </Text>
          ))}

          <View style={styles.landGllacrtraillShareRow}>
            <LandGllacrtraillGhostActionControl
              label="Share"
              icon="↗"
              onPress={landGllacrtraillHandleShare}
            />
          </View>
        </LandGllacrtraillFadeInView>
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
    paddingBottom: 32 + 24,
  },
  landGllacrtraillHero: {
    height: 260,
  },
  landGllacrtraillHeroImage: {
    flex: 1,
    justifyContent: 'flex-start',
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
    color: '#F05A7A',
  },
  landGllacrtraillBody: {
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 12,
  },
  landGllacrtraillMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  landGllacrtraillDate: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 12,
    color: '#7AB3CC',
  },
  landGllacrtraillDot: {
    fontSize: 16,
    color: 'rgba(61, 184, 240, 0.3)',
  },
  landGllacrtraillReadTime: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 12,
    color: '#3DB8F0',
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
  landGllacrtraillShareRow: {
    marginTop: 8,
  },
});
