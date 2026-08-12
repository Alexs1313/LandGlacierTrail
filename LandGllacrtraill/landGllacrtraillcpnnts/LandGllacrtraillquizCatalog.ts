import type {QuizQuestion} from './LandGllacrtraillquizSchema';

export const quizQuestions: QuizQuestion[] = [
  {
    questionKey: 'blue_ice_color',
    prompt: 'What gives dense glacier ice its deep blue color?',
    options: [
      {optionKey: 'a', label: 'Reflected sky light only'},
      {optionKey: 'b', label: 'Absorption of longer light wavelengths'},
      {optionKey: 'c', label: 'Volcanic minerals in the ice'},
      {optionKey: 'd', label: 'Salt trapped inside the glacier'},
    ],
    correctOptionKey: 'b',
    explanation:
      'Dense, compressed ice absorbs red and yellow light while reflecting blue tones back to the eye.',
  },
  {
    questionKey: 'ice_cave_season',
    prompt: 'When are glacier ice caves usually stable enough for guided visits?',
    options: [
      {optionKey: 'a', label: 'Summer, when meltwater is highest'},
      {optionKey: 'b', label: 'Winter, when temperatures drop'},
      {optionKey: 'c', label: 'Spring, during the thaw'},
      {optionKey: 'd', label: 'Year-round, they never change'},
    ],
    correctOptionKey: 'b',
    explanation:
      'Ice caves are seasonal — colder winter conditions can stabilize passages carved by meltwater.',
  },
  {
    questionKey: 'vatnajokull',
    prompt: 'Vatnajökull is best described as:',
    options: [
      {optionKey: 'a', label: 'Iceland\'s largest glacier'},
      {optionKey: 'b', label: 'A volcanic crater lake'},
      {optionKey: 'c', label: 'A coastal fishing village'},
      {optionKey: 'd', label: 'A geothermal hot spring area'},
    ],
    correctOptionKey: 'a',
    explanation:
      'Vatnajökull is the largest ice cap in Iceland and home to famous ice cave areas.',
  },
  {
    questionKey: 'jokulsarlon',
    prompt: 'What happens at Jökulsárlón glacier lagoon?',
    options: [
      {optionKey: 'a', label: 'Ice breaks off and floats in still water'},
      {optionKey: 'b', label: 'Lava flows directly into the sea'},
      {optionKey: 'c', label: 'Geysers erupt beside the glacier'},
      {optionKey: 'd', label: 'The glacier grows each summer'},
    ],
    correctOptionKey: 'a',
    explanation:
      'Icebergs calve from the glacier and drift across the lagoon before reaching the coast.',
  },
  {
    questionKey: 'glacier_safety',
    prompt: 'Why is solo glacier hiking considered dangerous?',
    options: [
      {optionKey: 'a', label: 'Glaciers are always below freezing'},
      {optionKey: 'b', label: 'Hidden crevasses and shifting ice'},
      {optionKey: 'c', label: 'Bears are common on Icelandic glaciers'},
      {optionKey: 'd', label: 'Glaciers do not move'},
    ],
    correctOptionKey: 'b',
    explanation:
      'Crevasses, unstable ice, and changing conditions make unguided glacier travel extremely risky.',
  },
  {
    questionKey: 'firn',
    prompt: 'What is firn in glacier formation?',
    options: [
      {optionKey: 'a', label: 'Meltwater under the ice'},
      {optionKey: 'b', label: 'Compressed snow transitioning to ice'},
      {optionKey: 'c', label: 'Volcanic ash on the surface'},
      {optionKey: 'd', label: 'A type of glacier cave'},
    ],
    correctOptionKey: 'b',
    explanation:
      'Firn is granular, compacted snow that gradually transforms into solid glacial ice over time.',
  },
  {
    questionKey: 'fire_and_ice',
    prompt: 'What creates Iceland\'s famous "fire and ice" landscape?',
    options: [
      {optionKey: 'a', label: 'Glaciers covering volcanic systems'},
      {optionKey: 'b', label: 'Artificial ice sculptures'},
      {optionKey: 'c', label: 'Underground coal deposits'},
      {optionKey: 'd', label: 'Desert sand blown onto ice'},
    ],
    correctOptionKey: 'a',
    explanation:
      'Many Icelandic glaciers sit atop or beside active volcanic terrain, mixing ash, lava, and ice.',
  },
  {
    questionKey: 'diamond_beach',
    prompt: 'Diamond Beach near Jökulsárlón is known for:',
    options: [
      {optionKey: 'a', label: 'Ice chunks washed onto black sand'},
      {optionKey: 'b', label: 'Actual diamond mining'},
      {optionKey: 'c', label: 'Pink sand dunes'},
      {optionKey: 'd', label: 'Tropical palm trees'},
    ],
    correctOptionKey: 'a',
    explanation:
      'Icebergs from the lagoon drift to sea and wash ashore as glittering blocks on volcanic sand.',
  },
  {
    questionKey: 'glacier_formation',
    prompt: 'How do glaciers primarily form?',
    options: [
      {optionKey: 'a', label: 'Snow accumulates and compresses over years'},
      {optionKey: 'b', label: 'Rivers freeze overnight'},
      {optionKey: 'c', label: 'Volcanic eruptions create ice'},
      {optionKey: 'd', label: 'Ocean waves freeze on the coast'},
    ],
    correctOptionKey: 'a',
    explanation:
      'Layers of snowfall compress into firn and eventually into dense glacial ice under their own weight.',
  },
  {
    questionKey: 'expedition_prep',
    prompt: 'What should you always do before glacier travel?',
    options: [
      {optionKey: 'a', label: 'Go alone at sunrise for photos'},
      {optionKey: 'b', label: 'Read safety info and use a guide'},
      {optionKey: 'c', label: 'Wear sandals for grip on ice'},
      {optionKey: 'd', label: 'Ignore weather forecasts'},
    ],
    correctOptionKey: 'b',
    explanation:
      'Glacier travel requires proper gear, conditions awareness, and experienced guides for safe access.',
  },
];

export const quizQuestionCount = quizQuestions.length;
