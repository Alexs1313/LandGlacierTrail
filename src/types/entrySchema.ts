export type FormationKind =
  | 'iceCaves'
  | 'glacierLagoons'
  | 'glacierViews'
  | 'volcanicIceRoutes';

export type FormationEntry = {
  entryKey: string;
  displayLabel: string;
  formationKind: FormationKind;
  sectorLabel: string;
  latitude: number;
  longitude: number;
  briefNarrative: string;
  extendedNarrative: string;
  assessmentValue: number;
  priorityLevel: boolean;
  visualAssetKey: string;
};

export type FilterSegment =
  | 'all'
  | 'glaciers'
  | 'iceCaves'
  | 'lagoons'
  | 'trails';

export type OnboardingPhase = {
  phaseKey: string;
  headline: string;
  bodyCopy: string;
  visualAsset: number;
  actionLabel: string;
};
