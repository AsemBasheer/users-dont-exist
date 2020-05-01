import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './cardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { devices } from './devices';

ReactDOM.render(
  <CardList devices={devices} />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();