function collectionHas(a, b) { //helper function (see below)
  for(let i = 0, len = a.length; i < len; i ++) {
    if(a[i] == b) return true;
  }
  return false;
}

export function findParentBySelector(elm, selector) {
  const all = document.querySelectorAll(selector);
  let cur = elm;
  while(cur && !collectionHas(all, cur)) { //keep going up until you find a match
    cur = cur.parentNode; //go up
  }
  return cur; //will return null if not found
}