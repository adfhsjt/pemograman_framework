import { render } from '@testing-library/react';
import HalamanProdukServer, { getServerSideProps } from '@/pages/produk/server';

jest.mock('@/views/product', () => {
	return function MockTampilanProduk(props: any) {
		return <div data-testid="produk-list">SSR Items: {props.products.length}</div>;
	};
});

describe('Halaman Produk Server (SSR)', () => {
	it('renders server props correctly', () => {
		const mockData = [
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
		];

		const page = render(<HalamanProdukServer products={mockData} />);
		expect(page.getByTestId('produk-list').textContent).toContain('2');
		expect(page.getByText('Halaman Produk Server')).toBeInTheDocument();
		expect(page).toMatchSnapshot();
	});
});

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () =>
			Promise.resolve({
				data: [
					{
						id: '1',
						name: 'Test',
						price: 1000,
						image: '/test.jpg',
						category: 'food',
					},
				],
			}),
	}),
) as jest.Mock;

describe('getServerSideProps', () => {
	it('returns props correctly', async () => {
		const result = await getServerSideProps();
		expect(result).toHaveProperty('props');
		expect(result.props.products).toHaveLength(1);
	});
});
