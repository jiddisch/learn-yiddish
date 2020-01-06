export class SharedTools {
  static shuffle(str: string): string[] {
    return [...str].reduceRight((res, _, __, arr) => [...res, arr.splice(~~(Math.random() * arr.length), 1)[0]], []);
  }
}