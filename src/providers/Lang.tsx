import { createContext, SetStateAction } from "react";

const LangContext = createContext({
    lang: "ptBr",
    setLang: (() => {}) as React.Dispatch<SetStateAction<string>>
})

export default LangContext