import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DetailsPage from '../components/DetailsPage';

it('should render Details page correctly', () => {
  const tree = render(
    <Router>
      <Provider store={store}>
        <DetailsPage />
      </Provider>
    </Router>,
  );

  expect(tree).toMatchSnapshot();
});
