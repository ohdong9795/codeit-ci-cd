import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Login from './Login';

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  test('displays loading state and then success message on successful login', async () => {
    // axios.post 모킹
    const mockResponse = { data: { token: '12345' } };
    jest.spyOn(axios, 'post').mockImplementation(() => Promise.resolve(mockResponse));

    render(<Login />);

    // Username과 Password 입력
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    // Submit 버튼 클릭
    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    // 로딩 중 상태 확인
    expect(screen.getByText('Submit...')).not.toBeNull();

    // 성공 메시지가 나타날 때까지 대기
    await waitFor(() => {
      const alert = screen.getByRole('alert');
      expect(alert).not.toBeNull();
      expect(alert.textContent).toBe("Congrats! You're signed in!");
    });

    // 로컬 스토리지에 토큰이 저장되었는지 확인
    expect(window.localStorage.getItem('token')).toBe('12345');
  });

  test('displays error message on failed login', async () => {
    // axios.post 모킹 (실패 시나리오)
    const mockError = new Error('Login failed');
    jest.spyOn(axios, 'post').mockImplementation(() => Promise.reject(mockError));

    render(<Login />);

    // Username과 Password 입력
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    // Submit 버튼 클릭
    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    // 로딩 중 상태 확인
    expect(screen.getByText('Submit...')).not.toBeNull();

    // 오류 메시지가 나타날 때까지 대기
    await waitFor(() => {
      const alert = screen.getByRole('alert');
      expect(alert).not.toBeNull();
      expect(alert.textContent).toBe('Login failed');
    });

    // 로컬 스토리지에 토큰이 저장되지 않았는지 확인
    expect(window.localStorage.getItem('token')).toBeNull();
  });
});
