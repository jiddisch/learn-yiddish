export interface TestLettersType1 {
  yiddishLetter: string;
  letterName: string;
  foreignLetter?: string[];
  possibleLetters: string[];
}

export interface TestsLevels {
  level: number;
  type: number;
  test: string[];
}
