import { render } from '@testing-library/react';
import { mockUseRouter } from '@/__test__/utils/router';
import HalamanToko from '@/pages/shop/[[...slug]]';

describe('Halaman Toko', () => {
    it('renders shop page with slug', () => {
        mockUseRouter({
            route: '/shop/elektronik',
            pathname: '/shop/[[...slug]]',
            asPath: '/shop/elektronik',
            query: { slug: ['elektronik'] },
        });

        const page = render(<HalamanToko />);

        expect(page.getByText('Halaman Toko')).toBeInTheDocument();
        expect(page.getByText('Toko: elektronik')).toBeInTheDocument();
        expect(page).toMatchSnapshot();
    });

    it('renders shop page without slug', () => {
        mockUseRouter({
            route: '/shop',
            pathname: '/shop/[[...slug]]',
            asPath: '/shop',
            query: {},
        });

        const page = render(<HalamanToko />);

        expect(page.getByText('Halaman Toko')).toBeInTheDocument();
        expect(page.getByText('Toko: Semua Toko')).toBeInTheDocument();
    });
});