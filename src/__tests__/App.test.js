import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '~/App';

it('renders without crashing', () => {
  const { debug } = render(<App />);
});
