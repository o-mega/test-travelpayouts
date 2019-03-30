import React, { useState, useRef } from 'react';
import { Locale } from '../api/';


export const ListItem = ({ data: { title, description, promocode, link } }) => {
  const inputEl = useRef(null);
  const [status, setStatus] = useState(null);

  const doFocus = () => {
    inputEl.current.focus();
    inputEl.current.select();
    document.execCommand('copy');
    setStatus(Locale.get('services.copied'));

    setTimeout(() => setStatus(null), 800);
  };

  return (
    <div className="item">
      <div className="data">
        <div className="name">{title}</div>
        <div className="std">{description}</div>
      </div>

      <div className="code">
        <div className="label">{Locale.get('services.label')}</div>

        <div className="input-box">
          <input type="text" ref={inputEl} value={promocode} className="input" onFocus={doFocus} readOnly />

          <button type="button" onClick={doFocus} aria-label="copy">
            <svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 3.5C10 3.22386 9.77614 3 9.5 3H0.5C0.223858 3 0 3.22386 0 3.5V15.5C0 15.7761 0.223858 16 0.5 16H9.5C9.77614 16 10 15.7761 10 15.5V3.5ZM8 5.5C8 5.22386 7.77614 5 7.5 5H2.5C2.22386 5 2 5.22386 2 5.5V13.5C2 13.7761 2.22386 14 2.5 14H7.5C7.77614 14 8 13.7761 8 13.5V5.5Z" />
              <path d="M4 0.5C4 0.223858 4.22386 0 4.5 0H13.5C13.7761 0 14 0.223858 14 0.5V12.5C14 12.7761 13.7761 13 13.5 13H11.5C11.2239 13 11 12.7761 11 12.5V11.5C11 11.2239 11.2239 11 11.5 11C11.7761 11 12 10.7761 12 10.5V2.5C12 2.22386 11.7761 2 11.5 2H4.5C4.22386 2 4 1.77614 4 1.5V0.5Z" />
            </svg>
          </button>

          {status && <div className="status">{status}</div>}
        </div>
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer" className="btn primary">{Locale.get('services.btn')}</a>
    </div>
  )
}
