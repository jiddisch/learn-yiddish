import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  shuffleStr2Arr(str: string): string[] {
    return [...str].reduceRight((res, _, __, arr) => [...res, arr.splice(~~(Math.random() * arr.length), 1)[0]], []);
  }

}
