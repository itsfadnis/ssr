import express from 'express';
import morgan from 'morgan';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../isomorphic/components/app';
import template from './template';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  const initialState = {
    todos: [{
      id: 1,
      text: 'Write server side code'
    }, {
      id: 2,
      text: 'Write client side code'
    }]
  };
  res.send(template({
    title: 'Todos',
    body: renderToString(<App { ...initialState } />),
    appState: initialState
  }));
});

app.listen(8080, (err) => {
  if (err) throw err;

  console.log('Express server running on http://localhost:8080');
});
