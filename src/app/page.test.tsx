import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Home from './page';

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    expect(screen.getByText(/IMS Platform/i)).toBeDefined();
  });

  it('renders the "Listo para codificar" button', () => {
    render(<Home />);
    expect(screen.getByText(/Listo para codificar/i)).toBeDefined();
  });
});
