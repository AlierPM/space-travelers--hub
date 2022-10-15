import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Nav from '../components/Nav';

test('testing prolife', () => {
  const nav = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Nav />
        </Router>
      </Provider>
    </React.StrictMode>,
  );
  expect(nav).toMatchSnapshot();
});
