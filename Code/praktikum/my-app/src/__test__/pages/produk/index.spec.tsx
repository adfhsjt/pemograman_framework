import { render } from '@testing-library/react';
import ProdukPage from '@/pages/produk/index';

jest.mock('swr', () => ({
	__esModule: true,
	default: jest.fn(),
}));

jest.mock('@/utils/swr/fetcher', () => ({
	__esModule: true,
	default: jest.fn(),
}));

import useSWR from 'swr';

describe('Produk Page', () => {
	it('renders loading state correctly', () => {
		(useSWR as jest.Mock).mockReturnValue({
			data: null,
			error: null,
			isLoading: true,
		});

		const page = render(<ProdukPage />);
		expect(page.getByTestId('title').textContent).toBe('Daftar Produk');
		expect(page).toMatchSnapshot();
	});

	it('renders data correctly', () => {
		(useSWR as jest.Mock).mockReturnValue({
			data: {
				data: [
					{
						id: '1',
						name: 'Lemper',
						price: 5000,
						image: 'https://example.com/lemper.jpg',
						category: 'Panganan',
					},
					{
						id: '2',
						name: 'Gethuk',
						price: 3000,
						image: 'https://example.com/gethuk.jpg',
						category: 'Panganan',
					},
				],
			},
			error: null,
			isLoading: false,
		});

		const page = render(<ProdukPage />);
		expect(page.getByTestId('title').textContent).toBe('Daftar Produk');
		expect(page.getByText(/Nama: Lemper/i)).toBeInTheDocument();
		expect(page.getByText(/Nama: Gethuk/i)).toBeInTheDocument();
		expect(page).toMatchSnapshot();
	});
});
