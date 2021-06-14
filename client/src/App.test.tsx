import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Global Tests', () => {
  test('Renders CarPage on first Load', () => {
    const { getByText } = render(<App />);

    getByText(/Car Photos/i);
  });
})

