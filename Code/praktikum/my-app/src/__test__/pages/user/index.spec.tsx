import { render } from '@testing-library/react';
import UserSettingPage from '@/pages/user/index';

describe('User Setting Page', () => {
  it('renders user setting page correctly', () => {
    const page = render(<UserSettingPage />);

    expect(page.getByText('User Setting Page')).toBeInTheDocument();
    expect(page).toMatchSnapshot();
  });
});