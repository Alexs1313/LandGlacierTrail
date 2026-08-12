import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {WebView} from 'react-native-webview';
import {LandGllacrtraillFadeInView} from '../landGllacrtraillcpnnts/LandGllacrtraillFadeInView';
import {appIconVisual} from '../landGllacrtraillcpnnts/LandGllacrtraillvisualRegistry';
import {
  LOADER_DURATION_MS,
  LOADER_WAVE_HTML,
} from '../landGllacrtraillcpnnts/LandGllacrtraillloaderWaveHtml';
import type {RootStackParamList} from '../landGllacrtraillroutts/LandGllacrtrailltypes';

type Props = StackScreenProps<RootStackParamList, 'Loader'>;

export function LandGllacrtraillLoaderScreen({navigation}: Props) {
  useEffect(() => {
    const landGllacrtraillTimer = setTimeout(() => {
      navigation.replace('IntroFlow');
    }, LOADER_DURATION_MS);

    return () => clearTimeout(landGllacrtraillTimer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/images/loader_background.png')}
      style={styles.landGllacrtraillBackground}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.landGllacrtraillScrollContent}>
        <View style={styles.landGllacrtraillMain}>
          <LandGllacrtraillFadeInView duration={600} offset={16}>
            <View style={styles.landGllacrtraillIconShadow}>
              <Image
                source={appIconVisual}
                style={styles.landGllacrtraillIcon}
                resizeMode="contain"
              />
            </View>
          </LandGllacrtraillFadeInView>
        </View>

        <LandGllacrtraillFadeInView delay={300} duration={500} offset={12}>
          <View style={styles.landGllacrtraillWaveWrap}>
            <WebView
              source={{html: LOADER_WAVE_HTML}}
              style={styles.landGllacrtraillWave}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              originWhitelist={['*']}
              backgroundColor="transparent"
            />
          </View>
        </LandGllacrtraillFadeInView>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  landGllacrtraillBackground: {
    flex: 1,
  },
  landGllacrtraillScrollContent: {
    flexGrow: 1,
  },
  landGllacrtraillMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  landGllacrtraillIconShadow: {
    width: 144,
    height: 144,
    borderRadius: 33,
    marginBottom: 24,
    shadowColor: '#3DB8F0',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 24,
    elevation: 12,
  },
  landGllacrtraillIcon: {
    width: 144,
    height: 144,
    borderRadius: 33,
  },
  landGllacrtraillWaveWrap: {
    position: 'absolute',
    bottom: 90,
    alignSelf: 'center',
  },
  landGllacrtraillWave: {
    width: 300,
    height: 100,
    backgroundColor: 'transparent',
  },
});
