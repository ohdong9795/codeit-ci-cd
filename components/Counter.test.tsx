import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  test('if button Clicked', () => {
    render(<Counter />);

    const countSpan = screen.getByTestId('count');
    expect(countSpan.textContent).toBe('Clicked 0 times');

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(countSpan.textContent).toBe('Clicked 1 time');

    fireEvent.click(button);
    expect(countSpan.textContent).toBe('Clicked 2 times');
  });

  test('if checkbox checked', async () => {
    render(<Counter />);

    const checkbox = screen.getByRole('checkbox');
    const countSpan = screen.getByTestId('count');

    expect(countSpan.textContent).toBe('Clicked 0 times');

    fireEvent.click(checkbox);
    expect(document.title).toBe('Total number of clicks: 0');

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(document.title).toBe('Total number of clicks: 1');

    fireEvent.click(button);
    expect(document.title).toBe('Total number of clicks: 2');

    fireEvent.click(checkbox);
    expect(document.title).not.toBe('Total number of clicks: 1');
  });
});
