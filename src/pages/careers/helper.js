export function getIds(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push({ id: arr[i].id, title: arr[i].title });
  }
  return array;
}
