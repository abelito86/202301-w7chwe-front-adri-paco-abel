import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('render page', () => {
  render(<Header />, { wrapper: MemoryRouter });
  expect(true).toBe(true);
});
