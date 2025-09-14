import { v4 as uuidv4 } from 'uuid';

export function getHumanReadableId() {
  // Generate a full uuid for maximum uniqueness
  return uuidv4();
}
