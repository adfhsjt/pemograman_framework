import { render } from '@testing-library/react';
import HalamanProdukStatic, { getStaticPaths, getStaticProps } from '@/pages/produk/[produk]/static';

jest.mock('@/views/DetailProduct', () => {
	return function MockDetailProduk(props: any) {
		return <div data-testid="detail-produk">Detail: {props.products?.name}</div>;
	};
});

describe('Halaman Produk Detail Static (SSG)', () => {
	it('renders static detail props correctly', () => {
		const product = {
			id: '1',
			name: 'Lemper',
			price: 5000,
			image: 'https://example.com/lemper.jpg',
			category: 'Panganan',
		};

		const page = render(<HalamanProdukStatic product={product} />);
		expect(page.getByText('Detail Produk Static')).toBeInTheDocument();
		expect(page.getByTestId('detail-produk').textContent).toContain('Lemper');
		expect(page).toMatchSnapshot();
	});
});

describe('getStaticPaths', () => {
	it('returns paths correctly', async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () =>
					Promise.resolve({
						data: [
							{ id: '1' },
							{ id: '2' },
						],
					}),
			}),
		) as jest.Mock;

		const result = await getStaticPaths();
		expect(result.paths).toHaveLength(2);
		expect(result.fallback).toBe(false);
	});
});

describe('getStaticProps detail produk', () => {
	it('returns product props correctly', async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () =>
					Promise.resolve({
						data: {
							id: '1',
							name: 'Test Static Detail',
							price: 1000,
							image: '/test.jpg',
							category: 'food',
						},
					}),
			}),
		) as jest.Mock;

		const result = await getStaticProps({ params: { produk: '1' } });
		expect(result).toHaveProperty('props');
		expect(result.props.product.name).toBe('Test Static Detail');
	});
});
