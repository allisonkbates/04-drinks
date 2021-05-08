function formatBarware(text) {
  if (!text) return 'Any glass you choose :)';
  return text.split('-').join(' ').toLowerCase();
}

export default formatBarware;