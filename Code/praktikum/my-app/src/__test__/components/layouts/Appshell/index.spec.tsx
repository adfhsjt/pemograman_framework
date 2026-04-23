import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import AppShell from '@/components/layouts/Appshell';

jest.mock('next/font/google', () => ({
  Roboto: () => ({ className: 'roboto' }),
}));

jest.mock('@/components/layouts/navbar', () => ({
  __esModule: true,
  default: () => <div data-testid="navbar">Navbar</div>,
}));

describe('AppShell Layout', () => {
  it('shows navbar on regular page', () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: '/about' });

    const page = render(
      <AppShell>
        <div data-testid="content">Content</div>
      </AppShell>,
    );

    expect(page.getByTestId('navbar')).toBeInTheDocument();
    expect(page.getByTestId('content')).toBeInTheDocument();
    expect(page).toMatchSnapshot();
  });

  it('hides navbar on disabled routes', () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: '/auth/login' });

    const page = render(
      <AppShell>
        <div data-testid="content">Content</div>
      </AppShell>,
    );

    expect(page.queryByTestId('navbar')).toBeNull();
    expect(page.getByTestId('content')).toBeInTheDocument();
  });
});