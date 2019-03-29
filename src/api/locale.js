export class Locale {
  constructor() {
    this.phrases = {};
  }

  static async load(newLocale) {
    const lang = newLocale || localStorage.getItem('lang') || 'ru';
    const response = await fetch(`lang-${lang}.json`);
    const json = await response.json();

    this.phrases = json;

    return localStorage.setItem('lang', lang);
  }

  static get(keyName) {
    return this.phrases[keyName];
  }
}
