import React, { useState } from 'react';

import { loadData } from './api/';
import { Aside, Header, Services } from './components/';


const App = () => {
  const [data, loading] = loadData();
  const [locale, setLocale] = useState(null);

  return (
    <div className="wrapper">
      <Aside />
      {loading ?
        <div />
        : <Header setLocale={setLocale} lang={locale} balance={data.header.balance} payout={data.header.next_payout} currency={data.header.currency} />
      }

      <div className="content">
        {loading ?
          <div className="spinner">
            <div /><div /><div /><div /><div />
          </div>
          : <Services data={data.bonuses} />
        }
      </div>

      <footer>
        <small>&copy; Travelpayouts, 2011–2018</small>
      </footer>
    </div>
  )
}

export default App;
