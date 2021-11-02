import { render, screen } from '@testing-library/react';
import App from './app';

test('renders header element', () => {
  render(<App />);
  const headerElement = screen.getByText('Healthcare provider registration');
  expect(headerElement).toBeInTheDocument();
});
