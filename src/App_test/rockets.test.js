import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketList from '../components/RocketList';

test('testing rockets', () => {
  const rockets = render(
    <Provider store={store}>
      <Router>
        <RocketList />
      </Router>
    </Provider>,
  );
  expect(rockets).toMatchSnapshot();
});
