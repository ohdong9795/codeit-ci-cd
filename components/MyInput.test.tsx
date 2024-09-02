import * as React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import MyInput from './MyInput';

describe('MyInput', () => {
  it('should render correctly', () => {
    const { unmount } = render(<MyInput />);
    expect(() => unmount()).not.toThrow();
  });

  it('should clear the value and onClear is triggered', async () => {
    const onClearMock = jest.fn();
    const { getByRole } = render(<MyInput onClear={onClearMock} />);
    const clearButton = getByRole('button', { name: /clear/i });

    fireEvent.click(clearButton);

    await waitFor(() => {
      const input = getByRole('textbox') as HTMLInputElement;
      expect(input.value).toEqual('');
      expect(onClearMock).toHaveBeenCalledTimes(1);
    });
  });
});
