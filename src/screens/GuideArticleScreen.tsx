import React from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {StackScreenProps} from '@react-navigation/stack';
import {resolveGuideArticleVisual} from '../assets/visualRegistry';
import {resolveArticleByKey} from '../data/guideCatalog';
import type {NotesStackParamList} from '../navigation/NotesStackNavigator';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {fontFamily, typographyMold} from '../palette/typographyMold';

type Props = StackScreenProps<NotesStackParamList, 'GuideArticle'>;

export function GuideArticleScreen({navigation, route}: Props) {
  const article = resolveArticleByKey(route.params.articleKey);

  if (!article) {
    return (
      <View style={styles.missing}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backLabel}>← Back</Text>
        </Pressable>
      </View>
    );
  }

  const visual = resolveGuideArticleVisual(article.visualAssetKey);
  const paragraphs = article.bodyContent.split('\n\n');

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
              colors={['rgba(6,15,30,0.5)', 'rgba(0,0,0,0)', 'rgba(6,15,30,0.95)']}
              locations={[0, 0.35, 1]}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.heroControls}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.roundControl}>
                <Text style={styles.roundControlIcon}>←</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.body}>
          <View style={styles.metaRow}>
            <Text style={styles.date}>{article.publishedLabel}</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.readTime}>{article.readMinutes} min read</Text>
          </View>
          <Text style={styles.title}>{article.title}</Text>
          <View style={styles.divider} />
          {paragraphs.map((paragraph, index) => (
            <Text key={index} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
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
    padding: spacingLattice.unitXl,
  },
  backLabel: {
    ...typographyMold.linkAction,
  },
  scrollContent: {
    paddingBottom: spacingLattice.screenBottom + spacingLattice.unit2xl,
  },
  hero: {
    height: 260,
  },
  heroImage: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  heroControls: {
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
  body: {
    paddingHorizontal: spacingLattice.unitXl,
    paddingTop: spacingLattice.unitLg,
    gap: spacingLattice.unitMd,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingLattice.unitMd,
  },
  date: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: chromaVault.textSector,
  },
  dot: {
    fontSize: 16,
    color: chromaVault.accentGlacialDim,
  },
  readTime: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: chromaVault.accentGlacial,
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
