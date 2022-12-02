
export interface IHeader {
    en: IHeaderLang;
    ptBr: IHeaderLang;
}

export interface IHeaderLang {
    options: IOption[];
    socials: ISocial[];
}

export type LangKey = keyof IHeader;

export interface IOption {
    name: string;
    label: string;
    link: string;
}

export interface ISocial {
    name: string;
    logo: string;
    link: string;
    label: string;
}




