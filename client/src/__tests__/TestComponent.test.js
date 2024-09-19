import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestComponent from '../components/TestComponent';

describe('TestComponent', () => {
  test('renders Wordle 2 title', () => {
    render(<TestComponent />);

    const button = screen.getByText('Test');
    expect(button).toBeInTheDocument();
  });
});
