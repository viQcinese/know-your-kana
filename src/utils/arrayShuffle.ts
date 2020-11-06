export default function arrayShuffle(array: any[]): any[] {
  for (let i = array.length - 1; i >= 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));

    const temp = array[i];
    array[i] = array[rand];
    array[rand] = temp;
  }

  return array;
}
