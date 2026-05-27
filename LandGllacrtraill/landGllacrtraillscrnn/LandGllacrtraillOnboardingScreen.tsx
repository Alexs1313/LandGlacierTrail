import React, {useState} from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {LandGllacrtraillPrimaryActionControl} from '../landGllacrtraillcpnnts/LandGllacrtraillPrimaryActionControl';
import {onboardPhases} from '../landGllacrtraillcpnnts/LandGllacrtraillonboardPhases';
import {typographyMold} from '../landGllacrtraillcpnnts/LandGllacrtrailltypographyMold';

type Props = {
  onComplete: () => void;
};

export function LandGllacrtraillOnboardingScreen({onComplete}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const landGllacrtraillCurrentPhase = onboardPhases[activeIndex];
  const landGllacrtraillIsLastPhase = activeIndex >= onboardPhases.length - 1;

  const landGllacrtraillAdvance = () => {
    if (landGllacrtraillIsLastPhase) {
      onComplete();
      return;
    }
    setActiveIndex(prev => prev + 1);
  };

  return (
    <ImageBackground
      key={landGllacrtraillCurrentPhase.phaseKey}
      source={landGllacrtraillCurrentPhase.visualAsset}
      style={styles.landGllacrtraillBackdrop}
      resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.landGllacrtraillTopBar}>
          <View style={styles.landGllacrtraillStatusPill}>
            <View style={styles.landGllacrtraillStatusDot} />
            <Text style={styles.landGllacrtraillStatusText}>EXPEDITION MODE</Text>
          </View>
          <Pressable onPress={onComplete} style={styles.landGllacrtraillSkipPill}>
            <Text style={styles.landGllacrtraillSkipText}>Skip</Text>
          </Pressable>
        </View>

        <View style={styles.landGllacrtraillBottomPanel}>
          <View style={styles.landGllacrtraillIndicatorRow}>
            {onboardPhases.map((phase, index) => (
              <View
                key={phase.phaseKey}
                style={[
                  styles.landGllacrtraillIndicatorDot,
                  index === activeIndex && styles.landGllacrtraillIndicatorDotActive,
                ]}
              />
            ))}
          </View>
          <Text style={styles.landGllacrtraillHeadline}>{landGllacrtraillCurrentPhase.headline}</Text>
          <Text style={styles.landGllacrtraillBody}>{landGllacrtraillCurrentPhase.bodyCopy}</Text>
          <LandGllacrtraillPrimaryActionControl
            label={landGllacrtraillCurrentPhase.actionLabel}
            onPress={landGllacrtraillAdvance}
            style={styles.landGllacrtraillAction}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  landGllacrtraillTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  landGllacrtraillStatusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(6, 15, 30, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(214, 51, 51, 0.35)',
  },
  landGllacrtraillStatusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D63333',
  },
  landGllacrtraillStatusText: {
    ...typographyMold.statusPill,
  },
  landGllacrtraillSkipPill: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(61, 184, 240, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(61, 184, 240, 0.25)',
  },
  landGllacrtraillSkipText: {
    ...typographyMold.skipLabel,
  },
  landGllacrtraillBottomPanel: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 32 + 32,
    justifyContent: 'flex-end',
    flex: 1,
  },
  landGllacrtraillIndicatorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  landGllacrtraillIndicatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(61, 184, 240, 0.3)',
  },
  landGllacrtraillIndicatorDotActive: {
    width: 24,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3DB8F0',
  },
  landGllacrtraillHeadline: {
    ...typographyMold.headingOnboard,
    marginBottom: 12,
    width: '80%',
  },
  landGllacrtraillBody: {
    ...typographyMold.bodyOnboard,
    marginBottom: 24,
  },
  landGllacrtraillAction: {
    width: '100%',
    borderRadius: 16,
  },
});
