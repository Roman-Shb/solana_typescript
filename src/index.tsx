import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
// import * as web3 from '@solana/web3.js';
//import TransactionHistory from './components/TransactionHistory';
import TransactionHistory from './pages/TransactionHistory/TransactionHistory';
import Transaction from './pages/Transaction/Transaction';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <TransactionHistory />
        </Route>
        <Route
          exact
          path='/transaction/:transactionId'
          render={({ match }) => <Transaction signature={match.params.transactionId} />}
        ></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
