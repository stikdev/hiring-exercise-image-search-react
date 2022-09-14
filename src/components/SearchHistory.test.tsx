import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchHistory from './SearchHistory';

test('renders "no past searches" when search history is empty', () => {
  render(<SearchHistory searchHistory={[]} />);
  const linkElement = screen.getByText(/no past searches/i);
  expect(linkElement).toBeInTheDocument();
});
