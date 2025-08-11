import React from 'react'; // sometimes needed in TSX files
import { render, screen } from '@testing-library/react';
import App from '../../src/App';  // default import, not destructured
import { describe, it, expect } from 'vitest';

describe('App integration', () => {
  it('renders the heading from App component', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
