import { ui } from './ui';
import { defaultLang, languages } from '../consts';

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export const setLanguage = (lang: string): string => languages.includes(lang) ? lang : defaultLang;
