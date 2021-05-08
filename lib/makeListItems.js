function makeListItems(text, contentName) {
  if (!text) return <p className="call-out">{`Add your ${contentName} to complete your recipe.`}</p>;
  let bullets = text.split('\n');
  return bullets.map(bullet => <li key={bullet}>{bullet}</li>)
}

export default makeListItems;