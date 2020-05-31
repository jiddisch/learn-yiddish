export class Helpers {

  static shuffleArray<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  static flatArray<T>(arr: T[][]): T[] {
    return arr.reduce((acc, val) => {
      return acc.concat(val);
    });
  }

}
