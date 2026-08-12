import React, {useEffect, useRef} from 'react';
import {Animated, type StyleProp, type ViewStyle} from 'react-native';
import {
  MOTION_FADE_DURATION,
  MOTION_SLIDE_OFFSET,
  MOTION_STAGGER_DELAY,
} from './LandGllacrtraillmotionTokens';

type Props = {
  children: React.ReactNode;
  index?: number;
  delay?: number;
  duration?: number;
  offset?: number;
  style?: StyleProp<ViewStyle>;
};

export function LandGllacrtraillFadeInView({
  children,
  index = 0,
  delay,
  duration = MOTION_FADE_DURATION,
  offset = MOTION_SLIDE_OFFSET,
  style,
}: Props) {
  const landGllacrtraillFadeAnim = useRef(new Animated.Value(0)).current;
  const landGllacrtraillSlideAnim = useRef(new Animated.Value(offset)).current;
  const landGllacrtraillStaggerDelay = delay ?? index * MOTION_STAGGER_DELAY;

  useEffect(() => {
    landGllacrtraillFadeAnim.setValue(0);
    landGllacrtraillSlideAnim.setValue(offset);

    Animated.parallel([
      Animated.timing(landGllacrtraillFadeAnim, {
        toValue: 1,
        duration,
        delay: landGllacrtraillStaggerDelay,
        useNativeDriver: true,
      }),
      Animated.timing(landGllacrtraillSlideAnim, {
        toValue: 0,
        duration,
        delay: landGllacrtraillStaggerDelay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [
    landGllacrtraillFadeAnim,
    landGllacrtraillSlideAnim,
    duration,
    landGllacrtraillStaggerDelay,
    offset,
  ]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: landGllacrtraillFadeAnim,
          transform: [{translateY: landGllacrtraillSlideAnim}],
        },
      ]}>
      {children}
    </Animated.View>
  );
}
