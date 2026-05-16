import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Home from './page';

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    expect(screen.getByText(/Mi Colegio/i)).toBeDefined();
  });

  it('renders the "Prueba gratuita" button', () => {
    render(<Home />);
    expect(screen.getByText(/Prueba gratuita/i)).toBeDefined();
  });
});
