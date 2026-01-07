let componentHooks = [];
let cursor = 0;
function useState(initalVal) {
  let pair = componentHooks[cursor];
  if (pair) {
    cursor++;
    return pair;
  }
  pair = [initalVal, setState];
  function setState(nextStateValue) {
    pair[0] = nextStateValue;
    updateDom();
  }
  componentHooks[cursor] = pair;
  cursor++;
  return pair;
}
function updateDom() {}
