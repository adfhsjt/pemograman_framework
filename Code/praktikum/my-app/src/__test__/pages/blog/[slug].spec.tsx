import { render} from '@testing-library/react';
import TampilanBlog from '@/pages/blog/[slug]';
import { mockUseRouter } from '@/__test__/utils/router';

describe("Blog Post Page", () => {
    it("renders blog post page correctly", () => {
        mockUseRouter({
            route: '/blog/my-first-post',
            pathname: '/blog/[slug]',
            asPath: '/blog/my-first-post',
            query: { slug: 'my-first-post' },
        });
        const page = render(<TampilanBlog />);
        expect(page.getByRole("heading", { name: "Halaman Blog" })).toBeInTheDocument();
        expect(page.getByText(/Slug: my-first-post/i)).toBeInTheDocument();
        expect(page).toMatchSnapshot();
    })
})