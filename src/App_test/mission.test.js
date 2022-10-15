import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/MissionsList';

test('testing missions', () => {
  const missions = render(
    <Provider store={store}>
      <Router>
        <Missions />
      </Router>
    </Provider>,
  );
  expect(missions).toMatchSnapshot();
});
