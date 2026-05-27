import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {resolveGuideArticleVisual} from './LandGllacrtraillvisualRegistry';
import type {GuideArticle} from './LandGllacrtraillguideSchema';

import {typographyMold} from './LandGllacrtrailltypographyMold';

type Props = {
  article: GuideArticle;
  onPress: () => void;
};

export function LandGllacrtraillArticleGuideCard({article, onPress}: Props) {
  const landGllacrtraillVisual = resolveGuideArticleVisual(article.visualAssetKey);

  return (
    <Pressable onPress={onPress} style={styles.landGllacrtraillCard}>
      <ImageBackground
        source={landGllacrtraillVisual}
        style={styles.landGllacrtraillHero}
        imageStyle={styles.landGllacrtraillHeroImage}
      />
      <View style={styles.landGllacrtraillBody}>
        <View style={styles.landGllacrtraillMetaRow}>
          <Text style={styles.landGllacrtraillDate}>{article.publishedLabel}</Text>
          <Text style={styles.landGllacrtraillDot}>·</Text>
          <Text style={styles.landGllacrtraillReadTime}>{article.readMinutes} min read</Text>
        </View>
        <Text style={styles.landGllacrtraillTitle}>{article.title}</Text>
        <Text style={styles.landGllacrtraillPreview} numberOfLines={2}>
          {article.previewText}
        </Text>
        <View style={styles.landGllacrtraillLinkRow}>
          <Text style={styles.landGllacrtraillLink}>Read article</Text>
          <Text style={styles.landGllacrtraillChevron}>›</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillCard: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#0D1E35',
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.12)',
  },
  landGllacrtraillHero: {
    height: 140,
    width: '100%',
  },
  landGllacrtraillHeroImage: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  landGllacrtraillBody: {
    padding: 16,
    gap: 8,
  },
  landGllacrtraillMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  landGllacrtraillDate: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#7AB3CC',
  },
  landGllacrtraillDot: {
    fontSize: 16,
    color: 'rgba(61, 184, 240, 0.3)',
  },
  landGllacrtraillReadTime: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#3DB8F0',
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
