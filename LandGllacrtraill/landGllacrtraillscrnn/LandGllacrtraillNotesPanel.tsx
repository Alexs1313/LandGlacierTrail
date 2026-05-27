import React, {useCallback, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {LandGllacrtraillArticleGuideCard} from '../landGllacrtraillcpnnts/LandGllacrtraillArticleGuideCard';
import {LandGllacrtraillChecklistRow} from '../landGllacrtraillcpnnts/LandGllacrtraillChecklistRow';
import {LandGllacrtraillGuideSegmentTabs} from '../landGllacrtraillcpnnts/LandGllacrtraillGuideSegmentTabs';
import {LandGllacrtraillSafetyGuideCard} from '../landGllacrtraillcpnnts/LandGllacrtraillSafetyGuideCard';
import {
  checklistItemCount,
  checklistSections,
  guideArticles,
  guideSafetyNotes,
} from '../landGllacrtraillcpnnts/LandGllacrtraillguideCatalog';
import {
  readChecklistPacked,
  toggleChecklistItem,
} from '../landGllacrtraillcpnnts/LandGllacrtraillpersistenceGate';
import type {RootStackParamList} from '../landGllacrtraillroutts/LandGllacrtrailltypes';
import {typographyMold} from '../landGllacrtraillcpnnts/LandGllacrtrailltypographyMold';
import type {GuideSegment} from '../landGllacrtraillcpnnts/LandGllacrtraillguideSchema';

export function LandGllacrtraillNotesPanel() {
  const landGllacrtraillStackNavigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();
  const [activeSegment, setActiveSegment] = useState<GuideSegment>('articles');
  const [packedKeys, setPackedKeys] = useState<string[]>([]);

  const landGllacrtraillPackedCount = packedKeys.length;
  const landGllacrtraillProgressPercent = Math.round((landGllacrtraillPackedCount / checklistItemCount) * 100);

  const landGllacrtraillLoadChecklist = useCallback(async () => {
    const landGllacrtraillKeys = await readChecklistPacked();
    setPackedKeys(landGllacrtraillKeys);
  }, []);

  useFocusEffect(
    useCallback(() => {
      landGllacrtraillLoadChecklist();
    }, [landGllacrtraillLoadChecklist]),
  );

  const landGllacrtraillHandleToggleItem = async (itemKey: string) => {
    await toggleChecklistItem(itemKey);
    await landGllacrtraillLoadChecklist();
  };

  const landGllacrtraillSafetyIntro = useMemo(
    () =>
      'Glacier travel is inherently hazardous. Read all safety information before departing.',
    [],
  );

  return (
    <View style={styles.landGllacrtraillRoot}>
      <ScrollView
        style={styles.landGllacrtraillScroll}
        contentContainerStyle={styles.landGllacrtraillScrollContent}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.landGllacrtraillEyebrow}>EXPEDITION GUIDE</Text>
        <Text style={styles.landGllacrtraillPageTitle}>Notes</Text>

        <LandGllacrtraillGuideSegmentTabs
          activeSegment={activeSegment}
          onChange={setActiveSegment}
        />

        {activeSegment === 'articles' ? (
          <View style={styles.landGllacrtraillListGap}>
            {guideArticles.map(article => (
              <LandGllacrtraillArticleGuideCard
                key={article.articleKey}
                article={article}
                onPress={() =>
                  landGllacrtraillStackNavigation.navigate('GuideArticle', {
                    articleKey: article.articleKey,
                  })
                }
              />
            ))}
          </View>
        ) : null}

        {activeSegment === 'safety' ? (
          <View style={styles.landGllacrtraillListGap}>
            <Text style={styles.landGllacrtraillSafetyIntro}>{landGllacrtraillSafetyIntro}</Text>
            {guideSafetyNotes.map(note => (
              <LandGllacrtraillSafetyGuideCard
                key={note.safetyKey}
                note={note}
                onPress={() =>
                  landGllacrtraillStackNavigation.navigate('GuideSafety', {
                    safetyKey: note.safetyKey,
                  })
                }
              />
            ))}
          </View>
        ) : null}

        {activeSegment === 'checklist' ? (
          <View style={styles.landGllacrtraillListGap}>
            <View style={styles.landGllacrtraillProgressBlock}>
              <View style={styles.landGllacrtraillProgressLabels}>
                <Text style={styles.landGllacrtraillProgressCount}>
                  {landGllacrtraillPackedCount} of {checklistItemCount} packed
                </Text>
                <Text style={styles.landGllacrtraillProgressPercent}>{landGllacrtraillProgressPercent}%</Text>
              </View>
              <View style={styles.landGllacrtraillProgressTrack}>
                <View
                  style={[styles.landGllacrtraillProgressFill, {width: `${landGllacrtraillProgressPercent}%`}]}
                />
              </View>
            </View>

            {checklistSections.map(section => (
              <View key={section.sectionKey} style={styles.landGllacrtraillSectionBlock}>
                <Text style={styles.landGllacrtraillSectionLabel}>{section.sectionLabel}</Text>
                <View style={styles.landGllacrtraillSectionItems}>
                  {section.items.map(item => (
                    <LandGllacrtraillChecklistRow
                      key={item.itemKey}
                      label={item.label}
                      isChecked={packedKeys.includes(item.itemKey)}
                      onToggle={() => landGllacrtraillHandleToggleItem(item.itemKey)}
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
  landGllacrtraillRoot: {
    flex: 1,
    backgroundColor: '#060F1E',
  },
  landGllacrtraillScroll: {
    flex: 1,
  },
  landGllacrtraillScrollContent: {
    paddingTop: 60,
    paddingBottom: 100,
    paddingHorizontal: 20,
    gap: 16,
  },
  landGllacrtraillEyebrow: {
    ...typographyMold.labelCaps,
    letterSpacing: 1.2,
    marginBottom: 4.2,
  },
  landGllacrtraillPageTitle: {
    ...typographyMold.headingDisplay,
    marginBottom: 4.2,
  },
  landGllacrtraillListGap: {
    gap: 16,
    marginTop: 8,
  },
  landGllacrtraillSafetyIntro: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 14,
    lineHeight: 22.4,
    color: '#7AB3CC',
  },
  landGllacrtraillProgressBlock: {
    gap: 8,
  },
  landGllacrtraillProgressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  landGllacrtraillProgressCount: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 13,
    color: '#3DB8F0',
  },
  landGllacrtraillProgressPercent: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 13,
    color: '#3DB8F0',
  },
  landGllacrtraillProgressTrack: {
    height: 3,
    borderRadius: 2,
    backgroundColor: 'rgba(61, 184, 240, 0.3)',
    overflow: 'hidden',
  },
  landGllacrtraillProgressFill: {
    height: '100%',
    backgroundColor: '#3DB8F0',
    borderRadius: 2,
  },
  landGllacrtraillSectionBlock: {
    gap: 12,
  },
  landGllacrtraillSectionLabel: {
    ...typographyMold.captionSmall,
    color: '#3DB8F0',
    letterSpacing: 1.1,
  },
  landGllacrtraillSectionItems: {
    gap: 8,
  },
});
