import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
  const result: RenderResult = render(<App />);
  expect(result.baseElement).toBeTruthy();
});
