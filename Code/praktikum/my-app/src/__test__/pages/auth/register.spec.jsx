import { render } from '@testing-library/react';
import Register from '@/pages/auth/register';
import { mockUseRouter } from '@/__test__/utils/router';

describe('Register Page', () => {
    it('renders the register page correctly', () => {
        mockUseRouter({
            route: '/auth/register',
            pathname: '/auth/register',
            asPath: '/auth/register',
        });
        const page = render(<Register />);
        const registerHeading = page.getByRole('heading', { name: /register/i });
        expect(registerHeading).toBeInTheDocument();
    });
});