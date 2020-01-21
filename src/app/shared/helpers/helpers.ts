import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Helpers {
  shuffleStr2Arr(str: string): string[] {
    return [...str].reduceRight((res, _, __, arr) => [...res, arr.splice(~~(Math.random() * arr.length), 1)[0]], []);
  }

  /**
   * Shuffles array
   * 
   * @template T 
   * @param arr a flatten array of any type
   * @return array 
   */
  shuffleArray<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
  }
}
