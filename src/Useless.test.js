import { render, screen } from '@testing-library/react';
import App from './useless';

test('renders first useless button', () => {
  render(<App />);
  const uselessButton1 = screen.getByText(/Look what I can do!!/i);
  expect(uselessButton1).toBeInTheDocument();
});

test('renders second useless button', () => {
    render(<App />);
    const uselessButton2 = screen.getByText(/I do nothing useful!/i);
    expect(uselessButton2).toBeInTheDocument();
  });
  