import LangContext from "providers/Lang";
import { useContext } from "react";

export default function useLang() {
    const { lang, setLang } = useContext(LangContext);
    return {lang, setLang}
}
