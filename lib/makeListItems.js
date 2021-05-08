function makeListItems(text) {
  let bullets = text.split('\n');
  return bullets.map(bullet => <li key={bullet}>{bullet}</li>)
}

export default makeListItems;