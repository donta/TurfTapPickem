import { LocalEnum, StorageEnum } from "#/enum";
import { getStringItem } from "@/utils/storage";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en_US from "./lang/en_US";
import es_ES from "./lang/es_ES";

const defaultLng = getStringItem(StorageEnum.I18N) || (LocalEnum.en_US as string);

// Set HTML lang attribute on initialization to prevent browser translation prompt when system language differs
document.documentElement.lang = defaultLng;

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: true,
		lng: defaultLng, // localstorage -> i18nextLng: en_US
		fallbackLng: LocalEnum.en_US,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		resources: {
			en_US: { translation: en_US },
			es_ES: { translation: es_ES },
		},
	});

export const { t } = i18n;
export default i18n;
