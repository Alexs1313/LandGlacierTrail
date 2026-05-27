import {FilterSegment, FormationEntry, FormationKind} from './LandGllacrtraillentrySchema';

export const kindDisplayMap: Record<FormationKind, string> = {
  iceCaves: 'Ice Caves',
  glacierLagoons: 'Lagoons',
  glacierViews: 'Glaciers',
  volcanicIceRoutes: 'Routes',
};

export const filterSegments: {segmentKey: FilterSegment; segmentLabel: string}[] =
  [
    {segmentKey: 'all', segmentLabel: 'All'},
    {segmentKey: 'glaciers', segmentLabel: 'Glaciers'},
    {segmentKey: 'iceCaves', segmentLabel: 'Ice Caves'},
    {segmentKey: 'lagoons', segmentLabel: 'Lagoons'},
    {segmentKey: 'trails', segmentLabel: 'Hiking Trails'},
  ];

export const formationCatalog: FormationEntry[] = [
  {
    entryKey: 'vatnajokull_glacier',
    displayLabel: 'Vatnajökull Glacier',
    formationKind: 'glacierViews',
    sectorLabel: 'Southeast Iceland',
    latitude: 64.413,
    longitude: -16.979,
    briefNarrative:
      "Europe's largest glacier, covering 8% of Iceland",
    extendedNarrative:
      'Vatnajökull is the largest glacier in Iceland and one of the largest in Europe by volume. It covers approximately 8,100 km² and reaches depths of 1,000 m. The glacier sits atop several active volcanoes, creating a landscape of subglacial rivers, ice caves, and dramatic outlet glaciers. Multiple entry points via Vatnajökull National Park offer glacier hiking, ice cave tours, and photography expeditions.',
    assessmentValue: 4.9,
    priorityLevel: false,
    visualAssetKey: 'JokulsarlonGlacierLagoon',
  },
  {
    entryKey: 'vatnajokull_ice_cave',
    displayLabel: 'Vatnajökull Ice Cave Area',
    formationKind: 'iceCaves',
    sectorLabel: 'Southeast Iceland',
    latitude: 64.0479,
    longitude: -16.1811,
    briefNarrative:
      'Seasonal blue ice cave zone near Vatnajökull.',
    extendedNarrative:
      'Vatnajökull Ice Cave Area is one of the most atmospheric glacier zones in Iceland, known for seasonal blue ice caves, deep frozen textures, and constantly changing natural formations. The area gives travelers a direct sense of Iceland’s glacier world: compressed blue layers, bright ice walls, snowy surfaces, and a powerful silence around the glacier.',
    assessmentValue: 4.9,
    priorityLevel: false,
    visualAssetKey: 'VatnajokullIceCaveArea',
  },
  {
    entryKey: 'crystal_ice_cave',
    displayLabel: 'Crystal Ice Cave Area',
    formationKind: 'iceCaves',
    sectorLabel: 'Vatnajökull National Park',
    latitude: 64.067,
    longitude: -16.219,
    briefNarrative:
      'Famous winter ice cave area near Breiðamerkurjökull.',
    extendedNarrative:
      'Crystal Ice Cave Area is a powerful winter glacier destination near Breiðamerkurjökull, known for clear blue ice, sculpted cave walls, and glass-like frozen surfaces.',
    assessmentValue: 4.8,
    priorityLevel: false,
    visualAssetKey: 'CrystalIceCaveArea',
  },
  {
    entryKey: 'katla_ice_cave',
    displayLabel: 'Katla Ice Cave',
    formationKind: 'iceCaves',
    sectorLabel: 'South Iceland',
    latitude: 63.532,
    longitude: -19.068,
    briefNarrative:
      'Dark volcanic ice cave connected with Mýrdalsjökull.',
    extendedNarrative:
      'Katla Ice Cave offers a darker and more dramatic version of Iceland’s glacier landscape. Connected with Mýrdalsjökull, it combines volcanic ash, black ice, blue frozen layers, and rough glacier textures in one powerful location.',
    assessmentValue: 4.7,
    priorityLevel: false,
    visualAssetKey: 'KatlaIceCave',
  },
  {
    entryKey: 'langjokull_tunnel',
    displayLabel: 'Langjökull Ice Tunnel',
    formationKind: 'iceCaves',
    sectorLabel: 'West Iceland / Highlands',
    latitude: 64.6565,
    longitude: -20.151,
    briefNarrative: 'Man-made tunnel inside Langjökull glacier.',
    extendedNarrative:
      'Langjökull Ice Tunnel gives travelers a rare chance to experience a glacier from the inside through a structured man-made tunnel.',
    assessmentValue: 4.6,
    priorityLevel: false,
    visualAssetKey: 'LangjokullIceTunnel',
  },
  {
    entryKey: 'skaftafell_ice_cave',
    displayLabel: 'Skaftafell Ice Cave',
    formationKind: 'iceCaves',
    sectorLabel: 'Vatnajökull National Park',
    latitude: 64.015,
    longitude: -16.966,
    briefNarrative: 'Crystal-blue glacier cave within Vatnajökull',
    extendedNarrative:
      'Skaftafell Ice Cave Area combines seasonal ice formations, glacier access, and the wider mountain landscape of Vatnajökull National Park.',
    assessmentValue: 4.8,
    priorityLevel: false,
    visualAssetKey: 'SkaftafellIceCaveArea',
  },
  {
    entryKey: 'jokulsarlon_lagoon',
    displayLabel: 'Jökulsárlón Glacier Lagoon',
    formationKind: 'glacierLagoons',
    sectorLabel: 'Southeast Iceland',
    latitude: 64.0784,
    longitude: -16.2306,
    briefNarrative:
      'Iceland’s most iconic glacier lagoon with floating icebergs.',
    extendedNarrative:
      'Jökulsárlón Glacier Lagoon is one of Iceland’s strongest natural landmarks, known for floating icebergs, deep blue water, and a dramatic glacier backdrop.',
    assessmentValue: 4.9,
    priorityLevel: true,
    visualAssetKey: 'JokulsarlonGlacierLagoon',
  },
  {
    entryKey: 'diamond_beach',
    displayLabel: 'Diamond Beach',
    formationKind: 'glacierLagoons',
    sectorLabel: 'Southeast Iceland',
    latitude: 64.0436,
    longitude: -16.1776,
    briefNarrative:
      'Black sand beach covered with ice pieces from Jökulsárlón.',
    extendedNarrative:
      'Diamond Beach is a striking coastal location where pieces of glacier ice rest on black volcanic sand after drifting from Jökulsárlón Glacier Lagoon toward the ocean.',
    assessmentValue: 4.8,
    priorityLevel: false,
    visualAssetKey: 'DiamondBeach',
  },
  {
    entryKey: 'fjallsarlon_lagoon',
    displayLabel: 'Fjallsárlón Glacier Lagoon',
    formationKind: 'glacierLagoons',
    sectorLabel: 'Southeast Iceland',
    latitude: 64.014,
    longitude: -16.385,
    briefNarrative: 'Quiet glacier lagoon near the edge of Vatnajökull.',
    extendedNarrative:
      'Fjallsárlón Glacier Lagoon is a calmer glacier lagoon located near the edge of Vatnajökull, offering a quieter and more spacious feeling than the more famous Jökulsárlón.',
    assessmentValue: 4.7,
    priorityLevel: false,
    visualAssetKey: 'FjallsarlonGlacierLagoon',
  },
  {
    entryKey: 'breidarlon_lagoon',
    displayLabel: 'Breiðárlón Glacier Lagoon',
    formationKind: 'glacierLagoons',
    sectorLabel: 'Southeast Iceland',
    latitude: 64.0445,
    longitude: -16.3564,
    briefNarrative:
      'Remote glacier lagoon between Fjallsárlón and Jökulsárlón.',
    extendedNarrative:
      'Breiðárlón Glacier Lagoon is a more remote and understated glacier lagoon in Southeast Iceland, located between larger and more visited glacier areas.',
    assessmentValue: 4.6,
    priorityLevel: false,
    visualAssetKey: 'BreidarlonGlacierLagoon',
  },
  {
    entryKey: 'heinabergslon_lagoon',
    displayLabel: 'Heinabergslón Glacier Lagoon',
    formationKind: 'glacierLagoons',
    sectorLabel: 'Southeast Iceland',
    latitude: 64.2587,
    longitude: -15.6114,
    briefNarrative:
      'Glacier lagoon surrounded by rugged Vatnajökull landscapes.',
    extendedNarrative:
      'Heinabergslón Glacier Lagoon is a rugged glacier lagoon surrounded by the broad landscapes of the Vatnajökull region.',
    assessmentValue: 4.6,
    priorityLevel: false,
    visualAssetKey: 'HeinabergslonGlacierLagoon',
  },
  {
    entryKey: 'solheimajokull',
    displayLabel: 'Sólheimajökull Glacier',
    formationKind: 'glacierViews',
    sectorLabel: 'South Iceland',
    latitude: 63.5323,
    longitude: -19.3693,
    briefNarrative: 'Accessible outlet glacier with ash-streaked ice.',
    extendedNarrative:
      'Sólheimajökull Glacier is one of the most accessible glacier locations in South Iceland, making it a strong choice for travelers who want to experience glacier scenery without going deep into remote highland terrain.',
    assessmentValue: 4.8,
    priorityLevel: false,
    visualAssetKey: 'SolheimajokullGlacier',
  },
  {
    entryKey: 'svinafellsjokull_view',
    displayLabel: 'Svínafellsjökull Glacier View',
    formationKind: 'glacierViews',
    sectorLabel: 'Vatnajökull National Park',
    latitude: 64.0165,
    longitude: -16.8807,
    briefNarrative: 'Dramatic glacier tongue near Skaftafell.',
    extendedNarrative:
      'Svínafellsjökull Glacier View offers one of the most cinematic glacier landscapes near Skaftafell, with sharp ice textures, deep crevasses, mountain surroundings, and a powerful glacier tongue stretching down from Vatnajökull.',
    assessmentValue: 4.9,
    priorityLevel: false,
    visualAssetKey: 'SvinafellsjokullGlacierView',
  },
  {
    entryKey: 'skaftafellsjokull_view',
    displayLabel: 'Skaftafellsjökull Glacier View',
    formationKind: 'glacierViews',
    sectorLabel: 'Vatnajökull National Park',
    latitude: 64.0162,
    longitude: -16.9667,
    briefNarrative: 'Scenic glacier view reached from the Skaftafell area.',
    extendedNarrative:
      'Skaftafellsjökull Glacier View is a scenic glacier viewpoint connected with the Skaftafell area of Vatnajökull National Park.',
    assessmentValue: 4.8,
    priorityLevel: false,
    visualAssetKey: 'SkaftafellsjokullGlacierView',
  },
  {
    entryKey: 'hoffellsjokull_view',
    displayLabel: 'Hoffellsjökull Glacier View',
    formationKind: 'glacierViews',
    sectorLabel: 'Southeast Iceland',
    latitude: 64.397,
    longitude: -15.444,
    briefNarrative: 'Glacier view near Höfn with mountain and ice scenery.',
    extendedNarrative:
      'Hoffellsjökull Glacier View is a quieter glacier viewing area near Höfn, offering mountain scenery, broad icy landscapes, and a more spacious feeling than some of the heavily visited glacier stops.',
    assessmentValue: 4.7,
    priorityLevel: false,
    visualAssetKey: 'HoffellsjokullGlacierView',
  },
  {
    entryKey: 'snaefellsjokull',
    displayLabel: 'Snæfellsjökull Glacier',
    formationKind: 'glacierViews',
    sectorLabel: 'West Iceland',
    latitude: 64.808,
    longitude: -23.776,
    briefNarrative: 'Glacier-covered volcano on the Snæfellsnes Peninsula.',
    extendedNarrative:
      'Snæfellsjökull Glacier is one of West Iceland’s most distinctive natural landmarks, combining a glacier-covered volcano with the dramatic coastal atmosphere of the Snæfellsnes Peninsula.',
    assessmentValue: 4.8,
    priorityLevel: false,
    visualAssetKey: 'SnaefellsjokullGlacier',
  },
  {
    entryKey: 'myrdalsjokull',
    displayLabel: 'Mýrdalsjökull Glacier',
    formationKind: 'volcanicIceRoutes',
    sectorLabel: 'South Iceland',
    latitude: 63.65,
    longitude: -19.13,
    briefNarrative: 'Glacier covering the Katla volcanic system.',
    extendedNarrative:
      'Mýrdalsjökull Glacier is one of Iceland’s most powerful “fire and ice” landscapes, covering the volcanic system of Katla beneath its frozen surface.',
    assessmentValue: 4.8,
    priorityLevel: false,
    visualAssetKey: 'MyrdalsjokullGlacier',
  },
  {
    entryKey: 'eyjafjallajokull_view',
    displayLabel: 'Eyjafjallajökull Glacier View',
    formationKind: 'volcanicIceRoutes',
    sectorLabel: 'South Iceland',
    latitude: 63.63,
    longitude: -19.62,
    briefNarrative:
      'Glacier-covered volcano with dramatic South Coast scenery.',
    extendedNarrative:
      'Eyjafjallajökull Glacier View gives travelers a clear look at one of Iceland’s most recognizable glacier-volcano landscapes.',
    assessmentValue: 4.7,
    priorityLevel: false,
    visualAssetKey: 'EyjafjallajokullGlacierView',
  },
  {
    entryKey: 'langjokull_glacier',
    displayLabel: 'Langjökull Glacier',
    formationKind: 'volcanicIceRoutes',
    sectorLabel: 'West Iceland / Highlands',
    latitude: 64.685,
    longitude: -20.2,
    briefNarrative: 'Large highland glacier with expedition-style routes.',
    extendedNarrative:
      'Langjökull Glacier is a large highland glacier that gives the app a strong expedition feeling. The landscape is wide, cold, and open, with broad ice surfaces, remote access roads, highland weather, and a sense of moving into Iceland’s interior.',
    assessmentValue: 4.8,
    priorityLevel: false,
    visualAssetKey: 'LangjokullGlacier',
  },
  {
    entryKey: 'hofsjokull',
    displayLabel: 'Hofsjökull Glacier',
    formationKind: 'volcanicIceRoutes',
    sectorLabel: 'Central Highlands',
    latitude: 64.817,
    longitude: -18.8,
    briefNarrative:
      'Remote central highland glacier between Iceland’s major ice caps.',
    extendedNarrative:
      'Hofsjökull Glacier is a remote glacier in Iceland’s Central Highlands, surrounded by broad interior landscapes, difficult access routes, and a strong sense of isolation.',
    assessmentValue: 4.6,
    priorityLevel: false,
    visualAssetKey: 'HofsjokullGlacier',
  },
  {
    entryKey: 'drangajokull',
    displayLabel: 'Drangajökull Glacier',
    formationKind: 'volcanicIceRoutes',
    sectorLabel: 'Westfjords',
    latitude: 66.166,
    longitude: -22.25,
    briefNarrative:
      'Remote glacier in the Westfjords with wild northern scenery.',
    extendedNarrative:
      'Drangajökull Glacier brings a rare northern glacier mood into the app, located in the remote Westfjords and surrounded by wild coastal landscapes, rough mountains, and quiet open space.',
    assessmentValue: 4.5,
    priorityLevel: false,
    visualAssetKey: 'DrangajokullGlacier',
  },
];

export function filterBySegment(
  entries: FormationEntry[],
  segment: FilterSegment,
): FormationEntry[] {
  if (segment === 'all') {
    return entries;
  }
  if (segment === 'glaciers') {
    return entries.filter(
      e =>
        e.formationKind === 'glacierViews' ||
        e.formationKind === 'volcanicIceRoutes',
    );
  }
  if (segment === 'trails') {
    return entries.filter(e => e.formationKind === 'glacierViews');
  }
  const landGllacrtraillKindMap: Record<'iceCaves' | 'lagoons', FormationKind> = {
    iceCaves: 'iceCaves',
    lagoons: 'glacierLagoons',
  };
  return entries.filter(e => e.formationKind === landGllacrtraillKindMap[segment]);
}

export function getPriorityEntry(): FormationEntry {
  return (
    formationCatalog.find(e => e.priorityLevel) ?? formationCatalog[0]
  );
}

export function resolveEntryByKey(entryKey: string): FormationEntry | undefined {
  return formationCatalog.find(e => e.entryKey === entryKey);
}

export function formatCoordinatePair(
  latitude: number,
  longitude: number,
): string {
  const landGllacrtraillLatDir = latitude >= 0 ? 'N' : 'S';
  const landGllacrtraillLonDir = longitude >= 0 ? 'E' : 'W';
  return `${Math.abs(latitude).toFixed(4)}° ${landGllacrtraillLatDir}, ${Math.abs(longitude).toFixed(4)}° ${landGllacrtraillLonDir}`;
}
