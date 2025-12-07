// Unit Test: Homepage

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../src/pages/Home';

test('homepage shows main heading', () => {
  // Rendering the Home page and checking if heading text shows
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  expect(screen.getByText(/Create Amazing Quizzes/i)).toBeInTheDocument();
});

test('homepage has Generate Your Quiz button', () => {
  // Checking if the Home page has the generate quiz button
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('button', { name: /Generate Your Quiz/i })
  ).toBeInTheDocument();
});
