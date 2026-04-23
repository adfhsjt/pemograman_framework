import { render } from '@testing-library/react';
import EditProfilPage from '@/pages/profil/edit';

describe('Halaman Edit Profile', () => {
    it('renders edit profile page correctly', () => {
        const page = render(<EditProfilPage />);

        expect(page.getByText('Ini Adalah Halaman Edit Profil')).toBeInTheDocument();
        expect(page).toMatchSnapshot();
    });
});