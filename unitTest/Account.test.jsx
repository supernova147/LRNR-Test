// Unit Test: Account page

import { render, screen } from '@testing-library/react';
import Account from '../src/pages/Account';

test('account page shows heading', () => {
  // Rendering the Account page and testing the main heading shows
  render(<Account />);
  expect(screen.getByText(/Account Page/i)).toBeInTheDocument();
});

test('account page shows welcome text', () => {
  // Rendering the Account page and testing the welcome message shows
  render(<Account />);
  expect(screen.getByText(/Welcome to your account\./i)).toBeInTheDocument();
});
