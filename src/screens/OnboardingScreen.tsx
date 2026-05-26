import React, {useState} from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {PrimaryActionControl} from '../components/PrimaryActionControl';
import {onboardPhases} from '../data/onboardPhases';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';

type Props = {
  onComplete: () => void;
};

export function OnboardingScreen({onComplete}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentPhase = onboardPhases[activeIndex];
  const isLastPhase = activeIndex >= onboardPhases.length - 1;

  const advance = () => {
    if (isLastPhase) {
      onComplete();
      return;
    }
    setActiveIndex(prev => prev + 1);
  };

  return (
    <ImageBackground
      key={currentPhase.phaseKey}
      source={currentPhase.visualAsset}
      style={styles.backdrop}
      resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <View style={styles.statusPill}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>EXPEDITION MODE</Text>
          </View>
          <Pressable onPress={onComplete} style={styles.skipPill}>
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>
        </View>

        <View style={styles.bottomPanel}>
          <View style={styles.indicatorRow}>
            {onboardPhases.map((phase, index) => (
              <View
                key={phase.phaseKey}
                style={[
                  styles.indicatorDot,
                  index === activeIndex && styles.indicatorDotActive,
                ]}
              />
            ))}
          </View>
          <Text style={styles.headline}>{currentPhase.headline}</Text>
          <Text style={styles.body}>{currentPhase.bodyCopy}</Text>
          <PrimaryActionControl
            label={currentPhase.actionLabel}
            onPress={advance}
            style={styles.action}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacingLattice.screenTop,
    paddingHorizontal: spacingLattice.unitXl,
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: spacingLattice.radiusPill,
    backgroundColor: 'rgba(6, 15, 30, 0.6)',
    borderWidth: 1,
    borderColor: chromaVault.statusSignalBorder,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: chromaVault.statusSignal,
  },
  statusText: {
    ...typographyMold.statusPill,
  },
  skipPill: {
    paddingHorizontal: spacingLattice.unitLg,
    paddingVertical: 7,
    borderRadius: spacingLattice.radiusPill,
    backgroundColor: chromaVault.surfaceGlassLight,
    borderWidth: 1,
    borderColor: chromaVault.accentGlacialBorderStrong,
  },
  skipText: {
    ...typographyMold.skipLabel,
  },
  bottomPanel: {
    paddingHorizontal: spacingLattice.unit2xl,
    paddingTop: spacingLattice.unit3xl,
    paddingBottom: spacingLattice.screenBottom + spacingLattice.unit3xl,
    justifyContent: 'flex-end',
    flex: 1,
  },
  indicatorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: spacingLattice.unit2xl,
  },
  indicatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: chromaVault.accentGlacialDim,
  },
  indicatorDotActive: {
    width: 24,
    height: 6,
    borderRadius: 3,
    backgroundColor: chromaVault.accentGlacial,
  },
  headline: {
    ...typographyMold.headingOnboard,
    marginBottom: spacingLattice.unitMd,
    width: '80%',
  },
  body: {
    ...typographyMold.bodyOnboard,
    marginBottom: spacingLattice.unit2xl,
  },
  action: {
    width: '100%',
    borderRadius: spacingLattice.radiusXl,
  },
});
