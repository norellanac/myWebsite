import { useLanguage } from "../../context/LanguageContext";
import i18n from "../../utils/i18n";
import { MainTemplate } from "../templates";


export default function ResumePage() {
    useLanguage();
    return (
        <MainTemplate>
            <h1>Resume Page</h1>
            <h1>{i18n.t("portfolio.projects[0].title")}</h1>
        </MainTemplate>
    )
}
