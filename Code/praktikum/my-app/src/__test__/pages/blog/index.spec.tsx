import { render } from '@testing-library/react';
import TampilanBlog from '@/pages/blog';
import { mockUseRouter } from '@/__test__/utils/router';

describe("Blog Page", () => {
    it("renders blog page correctly", () => {
        mockUseRouter({
            route: '/blog', 
            pathname: '/blog',
            asPath: '/blog',
        });
        const page = render(<TampilanBlog />);
        expect(page.getByText("Blog Page")).toBeInTheDocument();
        expect(page).toMatchSnapshot();
    })
})