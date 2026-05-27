export const chromaVault = {
  surfacePrimary: '#060F1E',
  surfaceCard: '#0D1E35',
  surfaceSecondary: '#141D2B',
  surfaceElevated: '#1A2538',
  surfaceGlass: 'rgba(6, 15, 30, 0.65)',
  surfaceGlassLight: 'rgba(61, 184, 240, 0.12)',
  surfaceBadge: 'rgba(6, 15, 30, 0.7)',
  surfaceKindPill: 'rgba(61, 184, 240, 0.15)',

  accentGlacial: '#3DB8F0',
  accentGlacialSoft: '#7AD4F5',
  accentGlacialDim: 'rgba(61, 184, 240, 0.3)',
  accentGlacialGlow: 'rgba(61, 184, 240, 0.25)',
  accentGlacialBorder: 'rgba(61, 184, 240, 0.12)',
  accentGlacialBorderStrong: 'rgba(61, 184, 240, 0.25)',
  accentGlacialBorderAction: 'rgba(61, 184, 240, 0.3)',

  actionGradientStart: '#1E6FA8',
  actionGradientEnd: '#3DB8F0',
  actionLabelOnFill: '#060F1E',
  actionGhostFill: 'rgba(61, 184, 240, 0.1)',
  actionGhostFillMarked: 'rgba(61, 184, 240, 0.2)',

  statusSignal: '#D63333',
  statusSignalBorder: 'rgba(214, 51, 51, 0.35)',
  statusGold: '#F0C843',
  statusGoldBorder: 'rgba(240, 200, 67, 0.4)',
  statusGoldSurface: 'rgba(240, 200, 67, 0.2)',

  textHighEmphasis: '#E8F4FC',
  textBrief: '#A8D4EC',
  textBody: '#8AB8CC',
  textSector: '#7AB3CC',
  textMuted: 'rgba(168, 212, 236, 0.6)',
  textCaption: '#3DB8F0',
  textOnboard: '#051E2C',
  textStatusPill: '#A8D4EC',

  borderMuted: 'rgba(255, 255, 255, 0.1)',
  dividerSubtle: 'rgba(61, 184, 240, 0.12)',

  overlayHeroTop: 'rgba(6, 15, 30, 0.5)',
  overlayHeroBottom: 'rgba(6, 15, 30, 0.6)',
  overlayExplore: 'rgba(84, 174, 225, 0.7)',
  overlayFeatured: 'rgba(6, 15, 30, 0.95)',

  onboardGradientStops: [
    'rgba(6, 15, 30, 0.25)',
    'rgba(86, 177, 227, 0.45)',
    'rgba(86, 177, 227, 0.6)',
    'rgb(86, 177, 227)',
  ] as const,
} as const;
