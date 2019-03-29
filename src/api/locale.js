export class Locale {
  constructor() {
    this.current = '';
    this.phrases = {};
  }

  static async load(newLocale) {
    const lang = newLocale || localStorage.getItem('lang') || 'ru';
    const response = await fetch(`lang-${lang}.json`);
    const json = await response.json();

    this.phrases = json;
    this.current = lang;

    return localStorage.setItem('lang', lang);
  }

  static change(newLocale) {
    return this.load(newLocale);
  }

  static get(keyName) {
    return this.phrases[keyName];
  }
}
