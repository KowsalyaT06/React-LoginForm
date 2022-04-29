/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
describe('Signup input field testing', () => {
  test('email input test', () => {
    render(<Form />);

    const inputEl = screen.getByTestId('input-email');
    expect(inputEl).toBeInTheDocument();
  });

  test('valid email', () => {
    render(<Form />);

    const inputEl = screen.getByTestId('input-email');
    userEvent.type(inputEl, 'abc@mail.com');

    expect(screen.queryByTestId('mail-error')).not.toBeInTheDocument();
  });

  test('testing password', () => {
    render(<Form />);

    const passEl = screen.getByTestId('input-pass');
    expect(passEl).toBeInTheDocument();
  });

  test('testing valid password', () => {
    const regexPassword = /^(?=.*?[A-Za-z])(?=.*?\d).{8,}$/;
    render(<Form />);

    let password = 'pass/@123&';
    expect(regexPassword.test(password)).toBe(true);
  });

  test('checkButton Render', () => {
    render(<Form />);

    const btn = screen.getByTestId('button');
    expect(btn).toBeTruthy();
  });

  test('check button', async () => {
    render(<Form />);

    const button = await screen.findAllByRole('button');
    expect(button).toHaveLength(1);
  });
});
