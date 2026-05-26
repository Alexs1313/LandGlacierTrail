import AsyncStorage from '@react-native-async-storage/async-storage';

const SELECTED_ITEMS_KEY = '@vault_selected_items';
const CHECKLIST_PACKED_KEY = '@vault_checklist_packed';

export async function readSelectedItems(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(SELECTED_ITEMS_KEY);
  if (!raw) {
    return [];
  }
  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export async function writeSelectedItems(keys: string[]): Promise<void> {
  await AsyncStorage.setItem(SELECTED_ITEMS_KEY, JSON.stringify(keys));
}

export async function toggleSelectedItem(entryKey: string): Promise<boolean> {
  const current = await readSelectedItems();
  const exists = current.includes(entryKey);
  const next = exists
    ? current.filter(k => k !== entryKey)
    : [...current, entryKey];
  await writeSelectedItems(next);
  return !exists;
}

export async function readChecklistPacked(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(CHECKLIST_PACKED_KEY);
  if (!raw) {
    return [];
  }
  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export async function writeChecklistPacked(keys: string[]): Promise<void> {
  await AsyncStorage.setItem(CHECKLIST_PACKED_KEY, JSON.stringify(keys));
}

export async function toggleChecklistItem(itemKey: string): Promise<boolean> {
  const current = await readChecklistPacked();
  const exists = current.includes(itemKey);
  const next = exists
    ? current.filter(k => k !== itemKey)
    : [...current, itemKey];
  await writeChecklistPacked(next);
  return !exists;
}
