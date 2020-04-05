import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Helpers {
  public shuffleStr2Arr(str: string): string[] {
    return [...str].reduceRight(
      (res, _, __, arr) => [
        ...res,
        arr.splice(~~(Math.random() * arr.length), 1)[0]
      ],
      []
    );
  }

  public shuffleArray<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
