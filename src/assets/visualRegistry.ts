import {ImageSourcePropType} from 'react-native';

export const formationVisuals: Record<string, ImageSourcePropType> = {
  VatnajokullIceCaveArea: require('../../assets/images/VatnajokullIceCaveArea.png'),
  CrystalIceCaveArea: require('../../assets/images/CrystalIceCaveArea.png'),
  KatlaIceCave: require('../../assets/images/KatlaIceCave.png'),
  LangjokullIceTunnel: require('../../assets/images/LangjokullIceTunnel.png'),
  SkaftafellIceCaveArea: require('../../assets/images/SkaftafellIceCaveArea.png'),
  JokulsarlonGlacierLagoon: require('../../assets/images/JokulsarlonGlacierLagoon.png'),
  DiamondBeach: require('../../assets/images/DiamondBeach.png'),
  FjallsarlonGlacierLagoon: require('../../assets/images/FjallsarlonGlacierLagoon.png'),
  BreidarlonGlacierLagoon: require('../../assets/images/BreidarlonGlacierLagoon.png'),
  HeinabergslonGlacierLagoon: require('../../assets/images/HeinabergslonGlacierLagoon.png'),
  SolheimajokullGlacier: require('../../assets/images/SolheimajokullGlacier.png'),
  SvinafellsjokullGlacierView: require('../../assets/images/SvinafellsjokullGlacierView.png'),
  SkaftafellsjokullGlacierView: require('../../assets/images/SkaftafellsjokullGlacierView.png'),
  HoffellsjokullGlacierView: require('../../assets/images/HoffellsjokullGlacierView.png'),
  SnaefellsjokullGlacier: require('../../assets/images/SnaefellsjokullGlacier.png'),
  MyrdalsjokullGlacier: require('../../assets/images/MyrdalsjokullGlacier.png'),
  EyjafjallajokullGlacierView: require('../../assets/images/EyjafjallajokullGlacierView.png'),
  LangjokullGlacier: require('../../assets/images/LangjokullGlacier.png'),
  HofsjokullGlacier: require('../../assets/images/HofsjokullGlacier.png'),
  DrangajokullGlacier: require('../../assets/images/DrangajokullGlacier.png'),
};

export const onboardVisuals = {
  discover: require('../../assets/images/onboardDiscover.png'),
  routes: require('../../assets/images/onboardRoutes.png'),
  map: require('../../assets/images/onboardMap.png'),
  reveal: require('../../assets/images/onboardReveal.png'),
  archive: require('../../assets/images/onboardArchive.png'),
} as const;

export const atmosphereBackdrop = require('../../assets/images/mainbackground.png');

export const appIconVisual = require('../../assets/images/appIcon.png');

export const guideArticleVisuals: Record<string, ImageSourcePropType> = {
  blue_ice: require('../../assets/images/guideBlueIce.png'),
  glacier_caves: require('../../assets/images/guideGlacierCaves.png'),
  fire_under_ice: require('../../assets/images/guideFireUnderIce.png'),
  glacier_lagoons: require('../../assets/images/guideGlacierLagoons.png'),
  preparing: require('../../assets/images/guidePreparing.png'),
};

export function resolveGuideArticleVisual(
  visualAssetKey: string,
): ImageSourcePropType {
  return (
    guideArticleVisuals[visualAssetKey] ?? guideArticleVisuals.blue_ice
  );
}

export const tabGlyphRegistry = {
  ExploreTab: require('../../assets/images/tabGlyphBrowse.png'),
  MapTab: require('../../assets/images/tabGlyphTerrain.png'),
  RevealTab: require('../../assets/images/tabGlyphReveal.png'),
  NotesTab: require('../../assets/images/tabGlyphJournal.png'),
  SavedTab: require('../../assets/images/tabGlyphArchive.png'),
} as const;

export type TabRouteKey = keyof typeof tabGlyphRegistry;

export function resolveFormationVisual(
  visualAssetKey: string,
): ImageSourcePropType {
  return (
    formationVisuals[visualAssetKey] ?? formationVisuals.VatnajokullIceCaveArea
  );
}
