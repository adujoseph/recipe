import i18next from 'i18next';
import english from './english.json';
import french from './french.json';
import yoruba from './yoruba.json';
import igbo from './igbo.json';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: english,
      fr: french,
      yor: yoruba,
      ig: igbo,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
