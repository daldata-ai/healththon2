import { v4 as uuidv4 } from 'uuid';

export function getHumanReadableId() {
  // Generate a uuid and take the first 8 characters for readability
  return uuidv4().split('-')[0];
}
