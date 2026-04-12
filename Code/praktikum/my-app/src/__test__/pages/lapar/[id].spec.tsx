import { render } from '@testing-library/react';
import HalamanLapar from '@/pages/lapar/[id]';
import { mockUseRouter } from '@/__test__/utils/router';

jest.mock('@/views/lapar/lapar', () => {
    return function MockTampilanLapar(props: any) {
        return (
            <div data-testid="lapar-detail">
                Lapar ID: {props.laparId}
            </div>
        );
    };
});

describe("Halaman Lapar Detail", () => {
    it("renders with id param", () => {
        mockUseRouter({
            route: '/lapar/123',
            pathname: '/lapar/[id]',
            asPath: '/lapar/123',
            query: { id: '123' },
        });
        const page = render(<HalamanLapar />);
        expect(page.getByTestId("lapar-detail").textContent).toContain("123")
        expect(page).toMatchSnapshot();
    });

});