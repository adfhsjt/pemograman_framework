import { render } from '@testing-library/react';
import Login from '@/pages/auth/login';
import { mockUseRouter } from '@/__test__/utils/router';

describe('Login Page', () => {
    it('renders the login page correctly', () => {
        mockUseRouter({
            route: '/auth/login',
            pathname: '/auth/login',
            asPath: '/auth/login',
        });
        const page = render(<Login />);
        const loginHeading = page.getByRole('heading', { name: /login/i });
        expect(loginHeading).toBeInTheDocument();
    });
});