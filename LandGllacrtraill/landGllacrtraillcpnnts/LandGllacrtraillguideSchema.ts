export type GuideSegment = 'articles' | 'safety' | 'checklist';

export type GuideArticle = {
  articleKey: string;
  title: string;
  subtitle: string;
  publishedLabel: string;
  readMinutes: number;
  previewText: string;
  visualAssetKey: string;
  bodyContent: string;
};

export type GuideSafetyNote = {
  safetyKey: string;
  title: string;
  subtitle: string;
  previewText: string;
  bodyContent: string;
};

export type ChecklistItem = {
  itemKey: string;
  label: string;
};

export type ChecklistSection = {
  sectionKey: string;
  sectionLabel: string;
  items: ChecklistItem[];
};
