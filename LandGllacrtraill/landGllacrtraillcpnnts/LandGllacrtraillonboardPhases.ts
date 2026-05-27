import {onboardVisuals} from './LandGllacrtraillvisualRegistry';
import {OnboardingPhase} from './LandGllacrtraillentrySchema';

export const onboardPhases: OnboardingPhase[] = [
  {
    phaseKey: 'discover',
    headline: "Discover Iceland's Glaciers",
    bodyCopy:
      "Explore the world's most spectacular glacier landscapes — ancient ice, crystal caves, and arctic wonder await.",
    visualAsset: onboardVisuals.discover,
    actionLabel: 'CONTINUE',
  },
  {
    phaseKey: 'routes',
    headline: 'Explore Glacier Routes',
    bodyCopy:
      "Browse curated routes across Iceland's eleven ice caps, from surface hikes to deep ice cave expeditions.",
    visualAsset: onboardVisuals.routes,
    actionLabel: 'CONTINUE',
  },
  {
    phaseKey: 'map',
    headline: 'Find Places on the Map',
    bodyCopy:
      'Navigate all glacier destinations with a map and tap any pin to preview and plan your route.',
    visualAsset: onboardVisuals.map,
    actionLabel: 'CONTINUE',
  },
  {
    phaseKey: 'reveal',
    headline: 'Ice Reveal',
    bodyCopy:
      "Can't decide? Let Ice Reveal choose your next destination — one tap opens a world of frozen discovery.",
    visualAsset: onboardVisuals.reveal,
    actionLabel: 'CONTINUE',
  },
  {
    phaseKey: 'archive',
    headline: 'Save & Take Notes',
    bodyCopy:
      'Bookmark glacier locations, read expedition guides, and prepare with safety tips and packing checklists.',
    visualAsset: onboardVisuals.archive,
    actionLabel: 'GET STARTED',
  },
];
