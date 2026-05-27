import AsyncStorage from '@react-native-async-storage/async-storage';

const SELECTED_ITEMS_KEY = '@vault_selected_items';
const CHECKLIST_PACKED_KEY = '@vault_checklist_packed';

export async function readSelectedItems(): Promise<string[]> {
  const landGllacrtraillRaw = await AsyncStorage.getItem(SELECTED_ITEMS_KEY);
  if (!landGllacrtraillRaw) {
    return [];
  }
  try {
    return JSON.parse(landGllacrtraillRaw) as string[];
  } catch {
    return [];
  }
}

export async function writeSelectedItems(keys: string[]): Promise<void> {
  await AsyncStorage.setItem(SELECTED_ITEMS_KEY, JSON.stringify(keys));
}

export async function toggleSelectedItem(entryKey: string): Promise<boolean> {
  const landGllacrtraillCurrent = await readSelectedItems();
  const landGllacrtraillExists = landGllacrtraillCurrent.includes(entryKey);
  const landGllacrtraillNext = landGllacrtraillExists
    ? landGllacrtraillCurrent.filter(k => k !== entryKey)
    : [...landGllacrtraillCurrent, entryKey];
  await writeSelectedItems(landGllacrtraillNext);
  return !landGllacrtraillExists;
}

export async function readChecklistPacked(): Promise<string[]> {
  const landGllacrtraillRaw = await AsyncStorage.getItem(CHECKLIST_PACKED_KEY);
  if (!landGllacrtraillRaw) {
    return [];
  }
  try {
    return JSON.parse(landGllacrtraillRaw) as string[];
  } catch {
    return [];
  }
}

export async function writeChecklistPacked(keys: string[]): Promise<void> {
  await AsyncStorage.setItem(CHECKLIST_PACKED_KEY, JSON.stringify(keys));
}

export async function toggleChecklistItem(itemKey: string): Promise<boolean> {
  const landGllacrtraillCurrent = await readChecklistPacked();
  const landGllacrtraillExists = landGllacrtraillCurrent.includes(itemKey);
  const landGllacrtraillNext = landGllacrtraillExists
    ? landGllacrtraillCurrent.filter(k => k !== itemKey)
    : [...landGllacrtraillCurrent, itemKey];
  await writeChecklistPacked(landGllacrtraillNext);
  return !landGllacrtraillExists;
}
