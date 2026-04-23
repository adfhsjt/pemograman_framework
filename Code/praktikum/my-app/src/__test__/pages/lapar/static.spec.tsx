import { render } from '@testing-library/react';
import HalamanLaparStatic from '@/pages/lapar/static';
import { getStaticProps } from '@/pages/lapar/static';

jest.mock('@/views/lapar', () => {
    return function MockTampilanLapar(props: any) {
        return (
            <div data-testid="lapar-list">
                SSG Items: {props.lapars.length}
            </div>
        );
    };
});

describe("Halaman Lapar Static (SSG)", () => {
    it("renders static props correctly", () => {
        const mockData = [
            {
                id: "10",
                name: "Lemper",
                price: 5000,
                image: "https://example.com/lemper.jpg",
                category: "Panganan",
            },
            {
                id: "20",
                name: "Gethuk",
                price: 3000,
                image: "https://example.com/gethuk.jpg",
                category: "Panganan",
            },
        ];

        const page = render(<HalamanLaparStatic lapars={mockData} />);
        expect(page.getByTestId("lapar-list").textContent).toContain("2");
        expect(page.getByText("Halaman Lapar Static")).toBeInTheDocument();
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

describe("getStaticProps", () => {
    it("returns props correctly", async () => {
        const result = await getStaticProps();
        expect(result.props.lapars).toHaveLength(1);
        expect(result.revalidate).toBe(10);
    });
});