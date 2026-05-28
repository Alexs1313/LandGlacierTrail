import {ImageSourcePropType} from 'react-native';

export const formationVisuals: Record<string, ImageSourcePropType> = {
  VatnajokullIceCaveArea: require('../../assets/images/vatnajokull_ice_cave_area.png'),
  CrystalIceCaveArea: require('../../assets/images/crystal_ice_cave_area.png'),
  KatlaIceCave: require('../../assets/images/katla_ice_cave.png'),
  LangjokullIceTunnel: require('../../assets/images/langjokull_ice_tunnel.png'),
  SkaftafellIceCaveArea: require('../../assets/images/skaftafell_ice_cave_area.png'),
  JokulsarlonGlacierLagoon: require('../../assets/images/jokulsarlon_glacier_lagoon.png'),
  DiamondBeach: require('../../assets/images/diamond_beach.png'),
  FjallsarlonGlacierLagoon: require('../../assets/images/fjallsarlon_glacier_lagoon.png'),
  BreidarlonGlacierLagoon: require('../../assets/images/breidarlon_glacier_lagoon.png'),
  HeinabergslonGlacierLagoon: require('../../assets/images/heinabergslon_glacier_lagoon.png'),
  SolheimajokullGlacier: require('../../assets/images/solheimajokull_glacier.png'),
  SvinafellsjokullGlacierView: require('../../assets/images/svinafellsjokull_glacier_view.png'),
  SkaftafellsjokullGlacierView: require('../../assets/images/skaftafellsjokull_glacier_view.png'),
  HoffellsjokullGlacierView: require('../../assets/images/hoffellsjokull_glacier_view.png'),
  SnaefellsjokullGlacier: require('../../assets/images/snaefellsjokull_glacier.png'),
  MyrdalsjokullGlacier: require('../../assets/images/myrdalsjokull_glacier.png'),
  EyjafjallajokullGlacierView: require('../../assets/images/eyjafjallajokull_glacier_view.png'),
  LangjokullGlacier: require('../../assets/images/langjokull_glacier.png'),
  HofsjokullGlacier: require('../../assets/images/hofsjokull_glacier.png'),
  DrangajokullGlacier: require('../../assets/images/drangajokull_glacier.png'),
};

export const onboardVisuals = {
  discover: require('../../assets/images/onboard_discover.png'),
  routes: require('../../assets/images/onboard_routes.png'),
  map: require('../../assets/images/onboard_map.png'),
  reveal: require('../../assets/images/onboard_reveal.png'),
  archive: require('../../assets/images/onboard_archive.png'),
} as const;

export const atmosphereBackdrop = require('../../assets/images/mainbackground.png');

export const appIconVisual = require('../../assets/images/app_icon.png');

export const guideArticleVisuals: Record<string, ImageSourcePropType> = {
  blue_ice: require('../../assets/images/guide_blue_ice.png'),
  glacier_caves: require('../../assets/images/guide_glacier_caves.png'),
  fire_under_ice: require('../../assets/images/guide_fire_under_ice.png'),
  glacier_lagoons: require('../../assets/images/guide_glacier_lagoons.png'),
  preparing: require('../../assets/images/guide_preparing.png'),
};

export function resolveGuideArticleVisual(
  visualAssetKey: string,
): ImageSourcePropType {
  return (
    guideArticleVisuals[visualAssetKey] ?? guideArticleVisuals.blue_ice
  );
}

export const tabGlyphRegistry = {
  ExploreTab: require('../../assets/images/tab_glyph_browse.png'),
  MapTab: require('../../assets/images/tab_glyph_terrain.png'),
  RevealTab: require('../../assets/images/tab_glyph_reveal.png'),
  NotesTab: require('../../assets/images/tab_glyph_journal.png'),
  SavedTab: require('../../assets/images/tab_glyph_archive.png'),
} as const;

export type TabRouteKey = keyof typeof tabGlyphRegistry;

export function resolveFormationVisual(
  visualAssetKey: string,
): ImageSourcePropType {
  return (
    formationVisuals[visualAssetKey] ?? formationVisuals.VatnajokullIceCaveArea
  );
}
