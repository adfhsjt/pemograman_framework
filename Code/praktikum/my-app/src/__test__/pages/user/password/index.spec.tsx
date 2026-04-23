import { render } from '@testing-library/react';
import PasswordSettingPage from '@/pages/user/password/index';

describe('Password Setting Page', () => {
  it('renders password setting page correctly', () => {
    const page = render(<PasswordSettingPage />);

    expect(page.getByText('Password Setting Page')).toBeInTheDocument();
    expect(page).toMatchSnapshot();
  });
});