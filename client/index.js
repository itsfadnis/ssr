import React from 'react';
import { render } from 'react-dom';
import App from '../isomorphic/components/app';

render(<App { ...window.APP_STATE } />, document.querySelector('#app'));

delete window.APP_STATE;
