import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {WebView} from 'react-native-webview';
import {appIconVisual} from '../assets/visualRegistry';
import {LOADER_DURATION_MS, LOADER_WAVE_HTML} from '../loader/loaderWaveHtml';
import {chromaVault} from '../palette/chromaVault';
import {spacingLattice} from '../palette/spacingLattice';
import {typographyMold} from '../palette/typographyMold';

type RootStackParamList = {
  Loader: undefined;
  IntroFlow: undefined;
  MainTabs: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Loader'>;

export function LoaderScreen({navigation}: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('IntroFlow');
    }, LOADER_DURATION_MS);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/images/loader_background.png')}
      style={styles.background}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.main}>
          <View style={styles.iconShadow}>
            <Image
              source={appIconVisual}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.tagline}>PREMIUM GLACIER GUIDE</Text>
          <Text style={styles.title}>ICELAND GLACIER TRAIL</Text>
        </View>

        <View style={styles.waveWrap}>
          <WebView
            source={{html: LOADER_WAVE_HTML}}
            style={styles.wave}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            originWhitelist={['*']}
            backgroundColor="transparent"
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacingLattice.unitXl,
  },
  iconShadow: {
    width: 144,
    height: 144,
    borderRadius: 33,
    marginBottom: spacingLattice.unit2xl,
    shadowColor: chromaVault.accentGlacial,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 24,
    elevation: 12,
  },
  icon: {
    width: 144,
    height: 144,
    borderRadius: 33,
  },
  tagline: {
    ...typographyMold.labelCaps,
    letterSpacing: 1.2,
    marginBottom: spacingLattice.unitSm,
  },
  title: {
    fontFamily: typographyMold.headingDisplay.fontFamily,
    fontSize: 30,
    lineHeight: 45,
    letterSpacing: 0.75,
    color: chromaVault.textHighEmphasis,
    textAlign: 'center',
  },
  waveWrap: {
    position: 'absolute',
    bottom: 90,
    alignSelf: 'center',
  },
  wave: {
    width: 300,
    height: 100,
    backgroundColor: 'transparent',
  },
});
