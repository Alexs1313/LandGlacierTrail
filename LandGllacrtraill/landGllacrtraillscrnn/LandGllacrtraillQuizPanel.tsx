import React, {useMemo, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LandGllacrtraillFadeInView} from '../landGllacrtraillcpnnts/LandGllacrtraillFadeInView';
import {LandGllacrtraillGhostActionControl} from '../landGllacrtraillcpnnts/LandGllacrtraillGhostActionControl';
import {LandGllacrtraillPrimaryActionControl} from '../landGllacrtraillcpnnts/LandGllacrtraillPrimaryActionControl';
import {LandGllacrtraillQuizAnswerRow} from '../landGllacrtraillcpnnts/LandGllacrtraillQuizAnswerRow';
import {LandGllacrtraillScalePressable} from '../landGllacrtraillcpnnts/LandGllacrtraillScalePressable';
import {
  quizQuestionCount,
  quizQuestions,
} from '../landGllacrtraillcpnnts/LandGllacrtraillquizCatalog';
import type {QuizPhase} from '../landGllacrtraillcpnnts/LandGllacrtraillquizSchema';
import {atmosphereBackdrop} from '../landGllacrtraillcpnnts/LandGllacrtraillvisualRegistry';
import {typographyMold} from '../landGllacrtraillcpnnts/LandGllacrtrailltypographyMold';

const landGllacrtraillOptionLetters = ['A', 'B', 'C', 'D'];

function landGllacrtraillResolveResultMessage(score: number): {
  headline: string;
  body: string;
} {
  if (score >= 9) {
    return {
      headline: 'Glacier Expert',
      body: 'Outstanding — you know Iceland\'s frozen landscapes inside and out.',
    };
  }
  if (score >= 7) {
    return {
      headline: 'Ice Trailblazer',
      body: 'Strong knowledge. A few more expeditions and you\'ll be unstoppable.',
    };
  }
  if (score >= 5) {
    return {
      headline: 'Frost Explorer',
      body: 'Solid start. Review the guide notes and try again to sharpen your skills.',
    };
  }
  return {
    headline: 'Fresh Snow',
    body: 'Every expert started somewhere. Explore the app and take the quiz again.',
  };
}

export function LandGllacrtraillQuizPanel() {
  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionKey, setSelectedOptionKey] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const landGllacrtraillCurrentQuestion = quizQuestions[questionIndex];
  const landGllacrtraillProgressPercent = Math.round(
    ((questionIndex + (phase === 'results' ? 1 : 0)) / quizQuestionCount) * 100,
  );

  const landGllacrtraillScore = useMemo(() => {
    return quizQuestions.reduce((total, question) => {
      return answers[question.questionKey] === question.correctOptionKey
        ? total + 1
        : total;
    }, 0);
  }, [answers]);

  const landGllacrtraillResultMessage = landGllacrtraillResolveResultMessage(landGllacrtraillScore);

  const landGllacrtraillStartQuiz = () => {
    setPhase('question');
    setQuestionIndex(0);
    setSelectedOptionKey(null);
    setAnswers({});
  };

  const landGllacrtraillResetQuiz = () => {
    setPhase('intro');
    setQuestionIndex(0);
    setSelectedOptionKey(null);
    setAnswers({});
  };

  const landGllacrtraillAdvanceQuestion = () => {
    if (!landGllacrtraillCurrentQuestion || !selectedOptionKey) {
      return;
    }

    const landGllacrtraillNextAnswers = {
      ...answers,
      [landGllacrtraillCurrentQuestion.questionKey]: selectedOptionKey,
    };
    setAnswers(landGllacrtraillNextAnswers);

    if (questionIndex >= quizQuestionCount - 1) {
      setPhase('results');
      return;
    }

    setQuestionIndex(prev => prev + 1);
    setSelectedOptionKey(null);
  };

  const landGllacrtraillShowBackdrop = phase === 'intro';

  return (
    <View style={styles.screen}>
      {landGllacrtraillShowBackdrop ? (
        <ImageBackground
          source={atmosphereBackdrop}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
      ) : null}

      <ScrollView
        style={styles.landGllacrtraillScroll}
        contentContainerStyle={styles.landGllacrtraillContent}
        showsVerticalScrollIndicator={false}>
        <LandGllacrtraillFadeInView style={styles.landGllacrtraillHeader}>
          <View>
            <Text style={styles.landGllacrtraillEyebrow}>GLACIER KNOWLEDGE</Text>
            <Text style={styles.landGllacrtraillTitle}>Ice Quiz</Text>
          </View>
          {phase !== 'intro' ? (
            <LandGllacrtraillScalePressable
              onPress={landGllacrtraillResetQuiz}
              pressScale={0.85}
              animateStyle={styles.landGllacrtraillCloseButton}>
              <Text style={styles.landGllacrtraillCloseIcon}>✕</Text>
            </LandGllacrtraillScalePressable>
          ) : null}
        </LandGllacrtraillFadeInView>

        {phase === 'intro' ? (
          <LandGllacrtraillFadeInView key="intro" index={1} style={styles.landGllacrtraillIntro}>
            <View style={styles.landGllacrtraillSnowOrb}>
              <View style={styles.landGllacrtraillSnowOrbHighlight} />
              <Text style={styles.landGllacrtraillSnowOrbIcon}>?</Text>
            </View>
            <Text style={styles.landGllacrtraillIntroTitle}>Test Your Ice IQ</Text>
            <Text style={styles.landGllacrtraillIntroText}>
              {quizQuestionCount} questions about Iceland's glaciers, ice caves, and
              expedition safety. How well do you know the frozen trail?
            </Text>
            <LandGllacrtraillPrimaryActionControl
              variant="map"
              label="START QUIZ"
              leadingIcon="❄"
              onPress={landGllacrtraillStartQuiz}
              style={styles.landGllacrtraillStartButton}
            />
          </LandGllacrtraillFadeInView>
        ) : null}

        {phase === 'question' && landGllacrtraillCurrentQuestion ? (
          <LandGllacrtraillFadeInView
            key={`question-${questionIndex}`}
            index={1}
            style={styles.landGllacrtraillQuestionBlock}>
            <View style={styles.landGllacrtraillProgressBlock}>
              <View style={styles.landGllacrtraillProgressLabels}>
                <Text style={styles.landGllacrtraillProgressCount}>
                  Question {questionIndex + 1} of {quizQuestionCount}
                </Text>
                <Text style={styles.landGllacrtraillProgressPercent}>
                  {landGllacrtraillProgressPercent}%
                </Text>
              </View>
              <View style={styles.landGllacrtraillProgressTrack}>
                <View
                  style={[
                    styles.landGllacrtraillProgressFill,
                    {width: `${landGllacrtraillProgressPercent}%`},
                  ]}
                />
              </View>
            </View>

            <Text style={styles.landGllacrtraillQuestionPrompt}>
              {landGllacrtraillCurrentQuestion.prompt}
            </Text>

            <View style={styles.landGllacrtraillAnswers}>
              {landGllacrtraillCurrentQuestion.options.map((option, index) => (
                <LandGllacrtraillQuizAnswerRow
                  key={option.optionKey}
                  letter={landGllacrtraillOptionLetters[index] ?? '?'}
                  label={option.label}
                  index={index}
                  isSelected={selectedOptionKey === option.optionKey}
                  onPress={() => setSelectedOptionKey(option.optionKey)}
                />
              ))}
            </View>

            <LandGllacrtraillPrimaryActionControl
              variant="map"
              label={questionIndex >= quizQuestionCount - 1 ? 'SEE RESULTS' : 'NEXT QUESTION'}
              disabled={!selectedOptionKey}
              onPress={landGllacrtraillAdvanceQuestion}
              style={styles.landGllacrtraillNextButton}
            />
          </LandGllacrtraillFadeInView>
        ) : null}

        {phase === 'results' ? (
          <LandGllacrtraillFadeInView key="results" index={1} style={styles.landGllacrtraillResults}>
            <View style={styles.landGllacrtraillScoreOrb}>
              <Text style={styles.landGllacrtraillScoreValue}>{landGllacrtraillScore}</Text>
              <Text style={styles.landGllacrtraillScoreDivider}>/</Text>
              <Text style={styles.landGllacrtraillScoreTotal}>{quizQuestionCount}</Text>
            </View>

            <Text style={styles.landGllacrtraillResultHeadline}>
              {landGllacrtraillResultMessage.headline}
            </Text>
            <Text style={styles.landGllacrtraillResultBody}>
              {landGllacrtraillResultMessage.body}
            </Text>

            <View style={styles.landGllacrtraillResultStats}>
              <View style={styles.landGllacrtraillStatCard}>
                <Text style={styles.landGllacrtraillStatValue}>
                  {Math.round((landGllacrtraillScore / quizQuestionCount) * 100)}%
                </Text>
                <Text style={styles.landGllacrtraillStatLabel}>Accuracy</Text>
              </View>
              <View style={styles.landGllacrtraillStatCard}>
                <Text style={styles.landGllacrtraillStatValue}>{quizQuestionCount}</Text>
                <Text style={styles.landGllacrtraillStatLabel}>Questions</Text>
              </View>
            </View>

            <View style={styles.landGllacrtraillResultActions}>
              <LandGllacrtraillPrimaryActionControl
                variant="map"
                label="TRY AGAIN"
                leadingIcon="↻"
                onPress={landGllacrtraillStartQuiz}
                style={styles.landGllacrtraillRetryButton}
              />
              <LandGllacrtraillGhostActionControl
                label="Back to intro"
                icon="←"
                onPress={landGllacrtraillResetQuiz}
              />
            </View>
          </LandGllacrtraillFadeInView>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#060F1E',
  },
  landGllacrtraillScroll: {
    flex: 1,
  },
  landGllacrtraillContent: {
    paddingTop: 60,
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  landGllacrtraillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 0,
  },
  landGllacrtraillCloseButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.25)',
    backgroundColor: 'rgba(61, 184, 240, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  landGllacrtraillCloseIcon: {
    fontFamily: 'BarlowCondensed-SemiBold',
    fontSize: 16,
    color: '#7AD4F5',
  },
  landGllacrtraillEyebrow: {
    ...typographyMold.labelCaps,
    letterSpacing: 1.2,
    marginBottom: 4.2,
  },
  landGllacrtraillTitle: {
    ...typographyMold.headingDisplay,
    marginBottom: 24,
  },
  landGllacrtraillIntro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  landGllacrtraillSnowOrb: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: 'rgba(61, 184, 240, 0.12)',
    shadowColor: '#3DB8F0',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.18,
    shadowRadius: 30,
    elevation: 4,
  },
  landGllacrtraillSnowOrbHighlight: {
    position: 'absolute',
    width: 48,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    top: 36,
  },
  landGllacrtraillSnowOrbIcon: {
    fontSize: 54,
    fontFamily: 'BarlowCondensed-Bold',
    color: '#7AD4F5',
  },
  landGllacrtraillIntroTitle: {
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 24,
    lineHeight: 36,
    color: '#E8F4FC',
    textAlign: 'center',
    marginBottom: 12,
  },
  landGllacrtraillIntroText: {
    ...typographyMold.bodyBrief,
    textAlign: 'center',
    color: '#A8D4EC',
    marginBottom: 24,
  },
  landGllacrtraillStartButton: {
    alignSelf: 'center',
    width: '78%',
  },
  landGllacrtraillQuestionBlock: {
    gap: 20,
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
  landGllacrtraillQuestionPrompt: {
    ...typographyMold.headingSection,
    fontSize: 20,
    lineHeight: 30,
  },
  landGllacrtraillAnswers: {
    gap: 10,
  },
  landGllacrtraillNextButton: {
    width: '100%',
    marginTop: 4,
  },
  landGllacrtraillResults: {
    alignItems: 'center',
    gap: 16,
    paddingTop: 8,
  },
  landGllacrtraillScoreOrb: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.25)',
    backgroundColor: 'rgba(61, 184, 240, 0.12)',
    marginBottom: 8,
    paddingTop: 52,
  },
  landGllacrtraillScoreValue: {
    fontFamily: 'BarlowCondensed-ExtraBold',
    fontSize: 56,
    lineHeight: 56,
    color: '#3DB8F0',
  },
  landGllacrtraillScoreDivider: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 28,
    color: '#7AB3CC',
    marginHorizontal: 2,
  },
  landGllacrtraillScoreTotal: {
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 28,
    color: '#7AB3CC',
  },
  landGllacrtraillResultHeadline: {
    ...typographyMold.headingCard,
    textAlign: 'center',
  },
  landGllacrtraillResultBody: {
    ...typographyMold.bodyBrief,
    textAlign: 'center',
    color: '#A8D4EC',
    marginBottom: 8,
  },
  landGllacrtraillResultStats: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  landGllacrtraillStatCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.12)',
    backgroundColor: 'rgba(61, 184, 240, 0.1)',
  },
  landGllacrtraillStatValue: {
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 24,
    color: '#E8F4FC',
    marginBottom: 4,
  },
  landGllacrtraillStatLabel: {
    ...typographyMold.captionSmall,
    color: '#7AB3CC',
  },
  landGllacrtraillResultActions: {
    width: '100%',
    gap: 12,
    marginTop: 8,
  },
  landGllacrtraillRetryButton: {
    width: '100%',
  },
});
