import { render } from '@testing-library/react';
import HalamanProdukStatic, { getStaticProps } from '@/pages/produk/static';

jest.mock('@/views/product', () => {
	return function MockTampilanProduk(props: any) {
		return <div data-testid="produk-list">SSG Items: {props.products.length}</div>;
	};
});

describe('Halaman Produk Static (SSG)', () => {
	it('renders static props correctly', () => {
		const mockData = [
			{
				id: '10',
				name: 'Lemper',
				price: 5000,
				image: 'https://example.com/lemper.jpg',
				category: 'Panganan',
			},
			{
				id: '20',
				name: 'Gethuk',
				price: 3000,
				image: 'https://example.com/gethuk.jpg',
				category: 'Panganan',
			},
		];

		const page = render(<HalamanProdukStatic products={mockData} />);
		expect(page.getByTestId('produk-list').textContent).toContain('2');
		expect(page.getByText('Halaman Produk Static')).toBeInTheDocument();
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

describe('getStaticProps', () => {
	it('returns props correctly', async () => {
		const result = await getStaticProps();
		expect(result.props.products).toHaveLength(1);
		expect(result.revalidate).toBe(10);
	});
});
