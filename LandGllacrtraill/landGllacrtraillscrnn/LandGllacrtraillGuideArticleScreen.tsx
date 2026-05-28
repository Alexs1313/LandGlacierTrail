import React from 'react';
import {
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {StackScreenProps} from '@react-navigation/stack';
import {resolveGuideArticleVisual} from '../landGllacrtraillcpnnts/LandGllacrtraillvisualRegistry';
import {resolveArticleByKey} from '../landGllacrtraillcpnnts/LandGllacrtraillguideCatalog';
import type {RootStackParamList} from '../landGllacrtraillroutts/LandGllacrtrailltypes';
import {typographyMold} from '../landGllacrtraillcpnnts/LandGllacrtrailltypographyMold';

type Props = StackScreenProps<RootStackParamList, 'GuideArticle'>;

export function LandGllacrtraillGuideArticleScreen({navigation, route}: Props) {
  const landGllacrtraillArticle = resolveArticleByKey(route.params.articleKey);

  if (!landGllacrtraillArticle) {
    return (
      <View style={styles.landGllacrtraillMissing}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.landGllacrtraillBackLabel}>← Back</Text>
        </Pressable>
      </View>
    );
  }

  const landGllacrtraillVisual = resolveGuideArticleVisual(
    landGllacrtraillArticle.visualAssetKey,
  );
  const landGllacrtraillParagraphs =
    landGllacrtraillArticle.bodyContent.split('\n\n');

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
            </View>
          </ImageBackground>
        </View>

        <View style={styles.landGllacrtraillBody}>
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
});
