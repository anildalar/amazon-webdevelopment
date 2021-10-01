import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tEn from './locales/en/translations.json';
import tHi from './locales/hi/translations.json';
import tTe from './locales/te/translations.json';
import tTa from './locales/ta/translations.json';
import tMl from './locales/ml/translations.json';
import tMr from './locales/mr/translations.json';
import tBn from './locales/bn/translations.json';
import tKn from './locales/kn/translations.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: tEn
  },
  hi: {
    translation: tHi
  },
  ta: {
    translation: tTa
  },
  te: {
    translation: tTe
  },
  kn: {
    translation: tKn
  },
  ml: {
    translation: tMl
  },
  mr: {
    translation: tMr
  },
  bn: {
    translation: tBn
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;