import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestComponent from '../components/TestComponent';

describe('Test component', () => {
  test('renders Test Component', () => {
    render(<TestComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });
});
