import { fireEvent, render } from '@testing-library/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Navbar from '@/components/layouts/navbar';

jest.mock('next/dist/client/script', () => ({
  __esModule: true,
  default: ({ id }: { id?: string }) => <script data-testid={id || 'script'} />,
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
  signOut: jest.fn(),
  useSession: jest.fn(),
}));

describe('Navbar Layout', () => {
  it('renders sign in button when session is empty', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });

    const page = render(<Navbar />);

    expect(page.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
    expect(page.queryByRole('button', { name: 'Sign Out' })).toBeNull();
    expect(page).toMatchSnapshot();
  });

  it('calls signIn when Sign In is clicked', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });

    const page = render(<Navbar />);
    fireEvent.click(page.getByRole('button', { name: 'Sign In' }));

    expect(signIn).toHaveBeenCalled();
  });

  it('renders user info and sign out button when session exists', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: {
        user: {
          fullname: 'Budi',
          image: 'https://example.com/avatar.jpg',
        },
      },
    });

    const page = render(<Navbar />);

    expect(page.getByText(/Welcome, Budi/i)).toBeInTheDocument();
    expect(page.getByRole('button', { name: 'Sign Out' })).toBeInTheDocument();
    expect(page.getByAltText('Budi')).toBeInTheDocument();
  });

  it('calls signOut when Sign Out is clicked', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: {
        user: { fullname: 'Budi', image: null },
      },
    });

    const page = render(<Navbar />);
    fireEvent.click(page.getByRole('button', { name: 'Sign Out' }));

    expect(signOut).toHaveBeenCalled();
  });
});