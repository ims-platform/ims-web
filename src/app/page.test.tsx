import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Home from './page';

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    // Usamos getAllByText porque el nombre aparece en el Navbar y en el Footer
    expect(screen.getAllByText(/Mi Colegio/i).length).toBeGreaterThan(0);
  });

  it('renders the "Prueba gratuita" button', () => {
    render(<Home />);
    expect(screen.getByText(/Prueba gratuita/i)).toBeDefined();
  });
});
