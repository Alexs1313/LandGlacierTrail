import React, {useRef} from 'react';
import {
  Animated,
  Pressable,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import {
  MOTION_PRESS_SCALE,
  MOTION_SPRING_FRICTION,
} from './LandGllacrtraillmotionTokens';

type Props = Omit<PressableProps, 'children' | 'style'> & {
  pressScale?: number;
  animateStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

export function LandGllacrtraillScalePressable({
  children,
  pressScale = MOTION_PRESS_SCALE,
  style,
  animateStyle,
  onPressIn,
  onPressOut,
  ...rest
}: Props) {
  const landGllacrtraillScaleAnim = useRef(new Animated.Value(1)).current;

  return (
    <Pressable
      {...rest}
      onPressIn={event => {
        Animated.spring(landGllacrtraillScaleAnim, {
          toValue: pressScale,
          useNativeDriver: true,
        }).start();
        onPressIn?.(event);
      }}
      onPressOut={event => {
        Animated.spring(landGllacrtraillScaleAnim, {
          toValue: 1,
          friction: MOTION_SPRING_FRICTION,
          useNativeDriver: true,
        }).start();
        onPressOut?.(event);
      }}
      style={style}>
      <Animated.View
        style={[
          animateStyle,
          {transform: [{scale: landGllacrtraillScaleAnim}]},
        ]}>
        {children}
      </Animated.View>
    </Pressable>
  );
}
