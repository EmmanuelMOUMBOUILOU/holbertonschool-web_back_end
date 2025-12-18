export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const parts = [];

  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      parts.push(item.slice(startString.length));
    }
  }

  return parts.join('-');
}
