
import { I18n } from 'i18n-js';

import en from "../../public/translations//en.json";
import es from "../../public/translations/es.json";

const i18n = new I18n();

i18n.translations = {
  en,
  es,
};

i18n.defaultLocale = "en";
i18n.locale = "en";

export default i18n;