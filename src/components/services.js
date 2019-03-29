import React, { useState } from 'react';

import { ListItem } from './list-item';
import { Locale } from '../api';


export const Services = ({ data }) => {
  const [str, setString] = useState('')
  let list = data;

  const handleInput = string => {
    setString(string);
  }

  if (str.length) {
    list = list.filter(item => {
      const data = item.title + ' ' + item.description;
      return data.toLowerCase().indexOf(str) > -1;
    });
  }

  return (
    <div className="services">
      <h1>{Locale.get('services.title')}</h1>

      <div className="search">
        <label htmlFor="filter">{Locale.get('search.label')}</label>
        <input type="text" onChange={event => handleInput(event.target.value)} value={str} id="filter" placeholder={Locale.get('search.placeholder')} className="input" />
        {str.length ? <button type="button" onClick={() => handleInput('')} className="btn secondary">{Locale.get('search.btn')}</button> : null}
      </div>

      <div className="list">
        {list.map(item => <ListItem data={item} key={item.title} />)}
      </div>
    </div>
  )
}
