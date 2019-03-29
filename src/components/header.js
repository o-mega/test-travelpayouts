import React from 'react';

import { Locale } from '../api/';


const formatPrice = (value) => {
  return parseInt(value, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
}


export const Header = ({ balance, payout, currency, setLocale, lang }) => {
  let curr = currency;
  if (currency === 'rub') curr = '₽';

  const active = lang || localStorage.getItem('lang');

  const changeLang = async (newLang) => {
    await Locale.load(newLang);
    setLocale(newLang);
  }

  return (
    <header>
      <div className="item">
        <div className="label">{Locale.get('header.balance')}</div>
        <div className="value">{formatPrice(balance)} {curr}</div>
      </div>

      <div className="item">
        <div className="label">{Locale.get('header.payout')}</div>
        <div className="value">{formatPrice(payout)} {curr}</div>
      </div>

      <div className="lang">
        <button type="button" onClick={() => changeLang('ru')} className={active === 'ru' ? 'active' : undefined}>РУС</button>
        <button type="button" onClick={() => changeLang('en')} className={active === 'en' ? 'active' : undefined}>ENG</button>
      </div>
    </header>
  )
}
