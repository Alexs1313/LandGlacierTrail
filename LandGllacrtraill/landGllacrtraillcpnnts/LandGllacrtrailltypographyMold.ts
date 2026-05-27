import {TextStyle} from 'react-native';
import {chromaVault} from './LandGllacrtraillchromaVault';

export const fontFamily = {
  regular: 'BarlowCondensed-Regular',
  medium: 'BarlowCondensed-Medium',
  semiBold: 'BarlowCondensed-SemiBold',
  bold: 'BarlowCondensed-Bold',
  extraBold: 'BarlowCondensed-ExtraBold',
  black: 'BarlowCondensed-Black',
} as const;

export const typographyMold: Record<string, TextStyle> = {
  labelCaps: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: chromaVault.accentGlacial,
  },
  headingDisplay: {
    fontFamily: fontFamily.bold,
    fontSize: 26,
    lineHeight: 39,
    color: chromaVault.textHighEmphasis,
  },
  headingDetail: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
    lineHeight: 35,
    color: chromaVault.textHighEmphasis,
  },
  headingCard: {
    fontFamily: fontFamily.bold,
    fontSize: 22,
    lineHeight: 33,
    color: chromaVault.textHighEmphasis,
  },
  headingRow: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    lineHeight: 20,
    color: chromaVault.textHighEmphasis,
  },
  headingSection: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    lineHeight: 27,
    color: chromaVault.textHighEmphasis,
  },
  headingOnboard: {
    fontFamily: fontFamily.bold,
    fontSize: 36,
    lineHeight: 45,
    color: chromaVault.textOnboard,
  },
  bodyNarrative: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 25.9,
    color: chromaVault.textBody,
  },
  bodyBrief: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 25.5,
    color: chromaVault.textBrief,
  },
  bodyRow: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 16.8,
    color: chromaVault.textSector,
  },
  bodyOnboard: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 24.375,
    color: chromaVault.textOnboard,
    width: '77%',
  },
  captionSmall: {
    fontFamily: fontFamily.regular,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: chromaVault.textCaption,
  },
  kindPill: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 16,
    color: chromaVault.accentGlacialSoft,
  },
  buttonLabel: {
    fontFamily: fontFamily.bold,
    fontSize: 17,
    letterSpacing: 1.7,
    textTransform: 'uppercase',
    color: chromaVault.textHighEmphasis,
  },
  buttonLabelMap: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    letterSpacing: 1.28,
    textTransform: 'uppercase',
    color: chromaVault.actionLabelOnFill,
  },
  buttonGhost: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    letterSpacing: 0.6,
    color: chromaVault.accentGlacial,
  },
  assessmentValue: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 19.5,
    color: chromaVault.statusGold,
  },
  linkAction: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 19.5,
    color: chromaVault.accentGlacial,
  },
  statusPill: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    letterSpacing: 1.1,
    color: chromaVault.textStatusPill,
  },
  skipLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    letterSpacing: 0.7,
    color: chromaVault.accentGlacialSoft,
  },
};
