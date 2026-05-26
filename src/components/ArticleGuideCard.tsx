import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {resolveGuideArticleVisual} from '../assets/visualRegistry';
import type {GuideArticle} from '../types/guideSchema';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {fontFamily, typographyMold} from '../palette/typographyMold';

type Props = {
  article: GuideArticle;
  onPress: () => void;
};

export function ArticleGuideCard({article, onPress}: Props) {
  const visual = resolveGuideArticleVisual(article.visualAssetKey);

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <ImageBackground
        source={visual}
        style={styles.hero}
        imageStyle={styles.heroImage}
      />
      <View style={styles.body}>
        <View style={styles.metaRow}>
          <Text style={styles.date}>{article.publishedLabel}</Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.readTime}>{article.readMinutes} min read</Text>
        </View>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.preview} numberOfLines={2}>
          {article.previewText}
        </Text>
        <View style={styles.linkRow}>
          <Text style={styles.link}>Read article</Text>
          <Text style={styles.chevron}>›</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: spacingLattice.radiusXl,
    overflow: 'hidden',
    backgroundColor: chromaVault.surfaceCard,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorder,
  },
  hero: {
    height: 140,
    width: '100%',
  },
  heroImage: {
    borderTopLeftRadius: spacingLattice.radiusXl,
    borderTopRightRadius: spacingLattice.radiusXl,
  },
  body: {
    padding: spacingLattice.unitLg,
    gap: spacingLattice.unitSm,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingLattice.unitMd,
  },
  date: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 18,
    color: chromaVault.textSector,
  },
  dot: {
    fontSize: 16,
    color: chromaVault.accentGlacialDim,
  },
  readTime: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 18,
    color: chromaVault.accentGlacial,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    lineHeight: 22.5,
    color: chromaVault.textHighEmphasis,
  },
  preview: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 19.5,
    color: chromaVault.textSector,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: spacingLattice.unitXs,
  },
  link: {
    ...typographyMold.linkAction,
  },
  chevron: {
    fontSize: 16,
    color: chromaVault.accentGlacial,
    marginTop: -1,
  },
});
