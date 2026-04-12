import { render } from '@testing-library/react';
import { getServerSideProps } from '@/pages/lapar/server';
import HalamanLaparServer from '@/pages/lapar/server';

jest.mock('@/views/lapar', () => {
    return function MockTampilanLapar(props: any) {
        return (
            <div data-testid="lapar-list">
                SSR Items: {props.lapars.length}
            </div>
        );
    };
});

describe("Halaman Lapar Server (SSR)", () => {
    it("renders server props correctly", () => {
        const mockData = [
            {
                id: "1",
                name: "Lemper",
                price: 5000,
                image: "https://example.com/lemper.jpg",
                category: "Panganan",

            },
            {
                id: "2",
                name: "Gethuk",
                price: 3000,
                image: "https://example.com/gethuk.jpg",
                category: "Panganan",
            },
            {
                id: "3",
                name: "Sego Pecel",
                price: 10000,
                image: "https://example.com/sego-pecel.jpg",
                category: "Panganan",
            },
        ];
        const page = render(<HalamanLaparServer lapars={mockData} />);
        expect(page.getByTestId("lapar-list").textContent).toContain("3");
        expect(page.getByText("Halaman Lapar Server")).toBeInTheDocument();
        expect(page).toMatchSnapshot();
    });

});

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                data: [
                    {
                        id: "1",
                        name: "Test",
                        price: 1000,
                        image: "/test.jpg",
                        category: "food",
                    },
                ],
            }),
    })
) as jest.Mock;

describe("getServerSideProps", () => {
    it("returns props correctly", async () => {
        const result = await getServerSideProps();
        expect(result).toHaveProperty("props");
        expect(result.props.lapars).toHaveLength(1);
    });
});