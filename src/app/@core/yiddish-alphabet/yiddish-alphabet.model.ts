export interface YiddishAlphabetServer {
  yiddishLetter: string;
  letterName: string;
}

export interface YiddishAlphabetClient extends YiddishAlphabetServer {
  foreignLetter?: string[];
}
