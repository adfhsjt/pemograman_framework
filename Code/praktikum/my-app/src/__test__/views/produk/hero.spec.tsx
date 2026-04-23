import { render, screen } from '@testing-library/react';
import TampilanHeroProduk from '@/views/produk/hero';

describe('TampilanHeroProduk', () => {
    it('renders hero title correctly', () => {
        const page = render(<TampilanHeroProduk />);
        expect(screen.getByTestId("hero-title").textContent).toBe('Produk Page');
        expect(page).toMatchSnapshot();
    });
});
