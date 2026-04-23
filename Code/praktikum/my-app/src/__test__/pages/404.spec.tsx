import { render } from '@testing-library/react';
import Custom404 from '@/pages/404';

jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ src, alt, ...props }: { src: string; alt: string }) => (
        <img src={src} alt={alt} {...props} />
    ),
}));

jest.mock('next/dist/client/link', () => ({
    __esModule: true,
    default: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
        <a href={href} {...props}>{children}</a>
    ),
}));

describe('404 Page', () => {
    it('renders 404 page correctly', () => {
        const page = render(<Custom404 />);

        expect(page.getByText('Halaman Tidak Ditemukan')).toBeInTheDocument();
        expect(page.getByText('Maaf, halaman yang Anda cari tidak ditemukan.')).toBeInTheDocument();
        expect(page.getByText('Kembali ke Home')).toBeInTheDocument();
        expect(page.getByRole('link', { name: 'Kembali ke Home' })).toHaveAttribute('href', '/');
        expect(page).toMatchSnapshot();
    });
});