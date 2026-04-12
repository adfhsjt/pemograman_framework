import { render } from '@testing-library/react';
import LaparPage from '@/pages/lapar/index';

jest.mock('swr', () => ({
    __esModule: true,
    default: jest.fn(),
}));
jest.mock('@/utils/swr/fetcher', () => ({
    __esModule: true,
    default: jest.fn(),
}));
jest.mock('@/views/lapar', () => {
    return function MockTampilanLapar(props: any) {
        return (
            <div data-testid="tampilan-lapar-list">
                Tampilan Lapar - {props.isLoading ? "Loading" : "Loaded"} - {props.lapars.length} items
            </div>
        );
    };
});

import useSWR from 'swr';
import error from 'next/dist/api/error';

describe("Lapar Page", () => {
    it("renders loading state correctly", () => {
        (useSWR as jest.Mock).mockReturnValue({
            data: null,
            error: null,
            isLoading: true,
        });

        const page = render(<LaparPage />);
        expect(page.getByTestId("tampilan-lapar-list").textContent).toContain("Loading");
        expect(page).toMatchSnapshot();
    });

    it("renders data correctly", () => {
        (useSWR as jest.Mock).mockReturnValue({
            data: {
                data: [
                    {
                        id: 1,
                        name: "Lemper",
                        price: 5000,
                        image: "https://example.com/lemper.jpg",
                        category: "Panganan",
                    },
                    {
                        id: 2,
                        name: "Gethuk",
                        price: 3000,
                        image: "https://example.com/gethuk.jpg",
                        category: "Panganan",
                    },
                ],
            },
            error: null,
            isLoading: false,
        });

        const page = render(<LaparPage />);
        expect(page.getByTestId("tampilan-lapar-list").textContent).toContain("Loaded");
        expect(page.getByTestId("tampilan-lapar-list").textContent).toContain("2 items");
        expect(page).toMatchSnapshot();
    });

});