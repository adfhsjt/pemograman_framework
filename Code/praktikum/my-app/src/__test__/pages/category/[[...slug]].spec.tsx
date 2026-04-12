import { render} from '@testing-library/react';
import { mockUseRouter } from '@/__test__/utils/router';
import CategoryPage from '@/pages/category/[[...slug]]';

describe('Category Page', () => {
    it('renders category page correctly', () => {
        mockUseRouter({
            route: '/category/panganan',
            pathname: '/category/[[...slug]]',
            asPath: '/category/panganan',
            query: { slug: ['panganan'] },
        });
        const page = render(<CategoryPage />);
        expect(page.getByRole('heading', { level: 1 }).textContent).toBe('Halaman Category');
        expect(page.getByText('1. panganan')).toBeInTheDocument();
        expect(page.container).toMatchSnapshot();
    })
});
