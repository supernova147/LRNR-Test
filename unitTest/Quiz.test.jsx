// Unit Test: Quiz page

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Quiz from '../src/pages/Quiz';

test('quiz page shows title', () => {
  // Rendering the Quiz page and checking if the title text shows
  render(
    <MemoryRouter>
      <Quiz />
    </MemoryRouter>
  );
  expect(screen.getByText(/Generate Your Quiz/i)).toBeInTheDocument();
});

test('quiz page has Quiz Topic field', () => {
  // Ensuring the main topic input is rendered with the correct label
  render(
    <MemoryRouter>
      <Quiz />
    </MemoryRouter>
  );
  expect(screen.getByLabelText(/Quiz Topic/i)).toBeInTheDocument();
});
