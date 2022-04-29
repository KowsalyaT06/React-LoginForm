/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Input field testing', () => {
  test('email input', () => {
    //Arrange
    render(<Login />);
    //Assert
    const emailElement = screen.getByTestId('email-input');
    expect(emailElement).toBeInTheDocument();
  });

  test('testing valid email', () => {
    //Arrange
    render(<Login />);
    //Assert
    const emailElement = screen.getByTestId('email-input');
    userEvent.type(emailElement, 'abc@mail.com');

    expect(emailElement).toHaveValue('abc@mail.com');
    expect(screen.queryByTestId('email-error')).not.toBeInTheDocument();
  });

  test('testing password', () => {
    render(<Login />);
    const passElement = screen.getByTestId('pass-input');
    expect(passElement).toBeInTheDocument();
    expect(passElement).toHaveAttribute('type', 'password');
  });

  test('testing valid password', () => {
    const regexPassword = /^(?=.*?[A-Za-z])(?=.*?\d).{8,}$/;
    render(<Login />);

    let password = 'pass@123';
    expect(regexPassword.test(password)).toBe(true);
  });

  test('checkButton Render', () => {
    render(<Login />);

    const btn = screen.getByTestId('button');
    expect(btn).toBeTruthy();
  });

  test('check button', async () => {
    render(<Login />);

    const button = await screen.findAllByRole('button');
    expect(button).toHaveLength(1);
  });
});
