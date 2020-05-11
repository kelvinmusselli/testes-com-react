import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '~/App';

it('renders without crashing', () => {
  const { debug, getAllByTestId } = render(<App />);
  expect(getAllByTestId('app-render'));
  debug();
});
