import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App, { getRandomColor } from './App';

describe('App', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('always creates a six-digit hexadecimal color', () => {
    expect(getRandomColor(() => 0)).toBe('#000000');
    expect(getRandomColor(() => 0.999999)).toMatch(/^#[0-9a-f]{6}$/);
  });

  it('increments the lifecycle sample counter', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole('heading', { name: '0' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '더하기' }));

    expect(screen.getByRole('heading', { name: '1' })).toBeInTheDocument();
  });

  it('preserves the shouldComponentUpdate lesson for numbers ending in four', async () => {
    const user = userEvent.setup();
    render(<App />);
    const increment = screen.getByRole('button', { name: '더하기' });

    await user.click(increment);
    await user.click(increment);
    await user.click(increment);
    await user.click(increment);
    expect(screen.getByRole('heading', { name: '3' })).toBeInTheDocument();

    await user.click(increment);
    expect(screen.getByRole('heading', { name: '5' })).toBeInTheDocument();
  });
});
