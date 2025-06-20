import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza seção Sobre', () => {
  render(<App />);
  const sobreHeading = screen.getByRole('heading', { name: /sobre mim/i });
  expect(sobreHeading).toBeInTheDocument();
});
