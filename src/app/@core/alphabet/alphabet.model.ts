export interface Alphabet {
  yiddishLetter: string;
  letterName: string;
  transcribedLetterName: string;
  transcribedLetter: string[];
}

export interface AlphabetTest extends Alphabet {
  possibleAnswer: string[];
}
