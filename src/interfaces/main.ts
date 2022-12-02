export interface IMain {
  en: IMainLang;
  ptBr: IMainLang;
}

export interface IMainLang {
  sections: ISection[];
}

export type LangKey = keyof IMain

export interface ISection {
  title: string;
  cards: ICard[];
}

export interface ICard {
  title: string;
  content: string;
  image?: string;
  link?: string;
}
