import { render } from '@testing-library/react';
import HalamanProdukServer, { getServerSideProps } from '@/pages/produk/[produk]/server';

jest.mock('@/views/DetailProduct', () => {
	return function MockDetailProduk(props: any) {
		return <div data-testid="detail-produk">Detail: {props.products?.name}</div>;
	};
});

describe('Halaman Produk Detail Server (SSR)', () => {
	it('renders server detail props correctly', () => {
		const product = {
			id: '1',
			name: 'Lemper',
			price: 5000,
			image: 'https://example.com/lemper.jpg',
			category: 'Panganan',
		};

		const page = render(<HalamanProdukServer product={product} />);
		expect(page.getByText('Detail Produk Server')).toBeInTheDocument();
		expect(page.getByTestId('detail-produk').textContent).toContain('Lemper');
		expect(page).toMatchSnapshot();
	});
});

describe('getServerSideProps detail produk', () => {
	it('returns product props correctly', async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () =>
					Promise.resolve({
						data: {
							id: '1',
							name: 'Test Detail',
							price: 1000,
							image: '/test.jpg',
							category: 'food',
						},
					}),
			}),
		) as jest.Mock;

		const result = await getServerSideProps({ params: { produk: '1' } });
		expect(result).toHaveProperty('props');
		expect(result.props.product.name).toBe('Test Detail');
	});
});
