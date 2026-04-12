import { render } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import HalamanProfile from '@/pages/profil/index';

jest.mock('next-auth/react', () => ({
    useSession: jest.fn(),
}));

describe('Halaman Profile', () => {
    it('renders profile page with user fullname', () => {
        (useSession as jest.Mock).mockReturnValue({
            data: {
                user: {
                    fullname: 'Budi',
                },
            },
        });

        const page = render(<HalamanProfile />);

        expect(page.getByText('Halaman Profile')).toBeInTheDocument();
        expect(page.getByText('Selamat Datang Budi')).toBeInTheDocument();
        expect(page).toMatchSnapshot();
    });

    it('renders profile page when session is missing', () => {
        (useSession as jest.Mock).mockReturnValue({
            data: null,
        });

        const page = render(<HalamanProfile />);

        expect(page.getByText('Halaman Profile')).toBeInTheDocument();
        expect(page.getByText('Selamat Datang')).toBeInTheDocument();
    });
});