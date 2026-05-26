import React, {useCallback, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {ArticleGuideCard} from '../components/ArticleGuideCard';
import {ChecklistRow} from '../components/ChecklistRow';
import {GuideSegmentTabs} from '../components/GuideSegmentTabs';
import {SafetyGuideCard} from '../components/SafetyGuideCard';
import {
  checklistItemCount,
  checklistSections,
  guideArticles,
  guideSafetyNotes,
} from '../data/guideCatalog';
import {
  readChecklistPacked,
  toggleChecklistItem,
} from '../loungeKit/persistenceGate';
import type {NotesStackParamList} from '../navigation/NotesStackNavigator';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';
import type {GuideSegment} from '../types/guideSchema';

type Props = StackScreenProps<NotesStackParamList, 'NotesHome'>;

export function NotesPanel({navigation}: Props) {
  const [activeSegment, setActiveSegment] = useState<GuideSegment>('articles');
  const [packedKeys, setPackedKeys] = useState<string[]>([]);

  const packedCount = packedKeys.length;
  const progressPercent = Math.round((packedCount / checklistItemCount) * 100);

  const loadChecklist = useCallback(async () => {
    const keys = await readChecklistPacked();
    setPackedKeys(keys);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadChecklist();
    }, [loadChecklist]),
  );

  const handleToggleItem = async (itemKey: string) => {
    await toggleChecklistItem(itemKey);
    await loadChecklist();
  };

  const safetyIntro = useMemo(
    () =>
      'Glacier travel is inherently hazardous. Read all safety information before departing.',
    [],
  );

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>EXPEDITION GUIDE</Text>
        <Text style={styles.pageTitle}>Notes</Text>

        <GuideSegmentTabs
          activeSegment={activeSegment}
          onChange={setActiveSegment}
        />

        {activeSegment === 'articles' ? (
          <View style={styles.listGap}>
            {guideArticles.map(article => (
              <ArticleGuideCard
                key={article.articleKey}
                article={article}
                onPress={() =>
                  navigation.navigate('GuideArticle', {
                    articleKey: article.articleKey,
                  })
                }
              />
            ))}
          </View>
        ) : null}

        {activeSegment === 'safety' ? (
          <View style={styles.listGap}>
            <Text style={styles.safetyIntro}>{safetyIntro}</Text>
            {guideSafetyNotes.map(note => (
              <SafetyGuideCard
                key={note.safetyKey}
                note={note}
                onPress={() =>
                  navigation.navigate('GuideSafety', {
                    safetyKey: note.safetyKey,
                  })
                }
              />
            ))}
          </View>
        ) : null}

        {activeSegment === 'checklist' ? (
          <View style={styles.listGap}>
            <View style={styles.progressBlock}>
              <View style={styles.progressLabels}>
                <Text style={styles.progressCount}>
                  {packedCount} of {checklistItemCount} packed
                </Text>
                <Text style={styles.progressPercent}>{progressPercent}%</Text>
              </View>
              <View style={styles.progressTrack}>
                <View
                  style={[styles.progressFill, {width: `${progressPercent}%`}]}
                />
              </View>
            </View>

            {checklistSections.map(section => (
              <View key={section.sectionKey} style={styles.sectionBlock}>
                <Text style={styles.sectionLabel}>{section.sectionLabel}</Text>
                <View style={styles.sectionItems}>
                  {section.items.map(item => (
                    <ChecklistRow
                      key={item.itemKey}
                      label={item.label}
                      isChecked={packedKeys.includes(item.itemKey)}
                      onToggle={() => handleToggleItem(item.itemKey)}
                    />
                  ))}
                </View>
              </View>
            ))}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: chromaVault.surfacePrimary,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: spacingLattice.screenTop,
    paddingBottom: spacingLattice.screenBottomTab,
    paddingHorizontal: spacingLattice.unitXl,
    gap: spacingLattice.unitLg,
  },
  eyebrow: {
    ...typographyMold.labelCaps,
    letterSpacing: 1.2,
    marginBottom: spacingLattice.unitXs,
  },
  pageTitle: {
    ...typographyMold.headingDisplay,
    marginBottom: spacingLattice.unitXs,
  },
  listGap: {
    gap: spacingLattice.unitLg,
    marginTop: spacingLattice.unitSm,
  },
  safetyIntro: {
    fontFamily: typographyMold.bodyNarrative.fontFamily,
    fontSize: 14,
    lineHeight: 22.4,
    color: chromaVault.textSector,
  },
  progressBlock: {
    gap: spacingLattice.unitSm,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressCount: {
    fontFamily: typographyMold.linkAction.fontFamily,
    fontSize: 13,
    color: chromaVault.accentGlacial,
  },
  progressPercent: {
    fontFamily: typographyMold.linkAction.fontFamily,
    fontSize: 13,
    color: chromaVault.accentGlacial,
  },
  progressTrack: {
    height: 3,
    borderRadius: 2,
    backgroundColor: chromaVault.accentGlacialDim,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: chromaVault.accentGlacial,
    borderRadius: 2,
  },
  sectionBlock: {
    gap: spacingLattice.unitMd,
  },
  sectionLabel: {
    ...typographyMold.captionSmall,
    color: chromaVault.accentGlacial,
    letterSpacing: 1.1,
  },
  sectionItems: {
    gap: spacingLattice.unitSm,
  },
});
