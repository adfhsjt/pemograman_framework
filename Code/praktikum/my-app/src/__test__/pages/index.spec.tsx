import { render } from '@testing-library/react';
import Home from '@/pages/index';

jest.mock('next/head', () => {
    return function MockHead({ children }: { children: React.ReactNode }) {
        return <>{children}</>;
    };
});

jest.mock('next/font/google', () => ({
    Inter: () => ({ className: 'inter' }),
}));

jest.mock('@/components/layouts/navbar', () => ({
    __esModule: true,
    default: () => <div data-testid="navbar">Navbar</div>,
}));

describe('Home Page', () => {
    it('renders home page content correctly', () => {
        const page = render(<Home />);

        expect(page.getByText('Praktikum Next.js Pages Router')).toBeInTheDocument();
        expect(page.getByText('Mahasiswa D4 Pengembangan Web')).toBeInTheDocument();
        expect(page.getByRole('link', { name: 'Halaman About' })).toHaveAttribute('href', 'about');
        expect(page).toMatchSnapshot();
    });
});