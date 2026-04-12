import { render } from '@testing-library/react';
import { mockUseRouter } from '@/__test__/utils/router';
import HalamanProduk from '@/pages/produk/[produk]/index';

jest.mock('swr', () => ({
	__esModule: true,
	default: jest.fn(),
}));

import useSWR from 'swr';

describe('Halaman Produk Detail', () => {
    
	it('renders with produk param', () => {
		mockUseRouter({
			route: '/produk/1',
			pathname: '/produk/[produk]',
			asPath: '/produk/1',
			query: { produk: '1' },
		});

		(useSWR as jest.Mock).mockReturnValue({
			data: {
				data: {
					id: '1',
					name: 'Lemper',
					price: 5000,
					image: 'https://example.com/lemper.jpg',
					category: 'Panganan',
				},
			},
			error: null,
			isLoading: false,
		});

		const page = render(
			<HalamanProduk
				product={{
					id: '1',
					name: 'Lemper',
					price: 5000,
					image: 'https://example.com/lemper.jpg',
					category: 'Panganan',
				}}
			/>,
		);

		expect(page.getByText('Detail Produk')).toBeInTheDocument();
		expect(page.getByText('Lemper')).toBeInTheDocument();
		expect(page).toMatchSnapshot();
	});
});
