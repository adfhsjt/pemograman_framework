import { render } from '@testing-library/react';
import AboutPage from "@/pages/about";

describe("AboutPage", () => {
    it("renders about page correctly", () => {
        const page = render(<AboutPage />);
        // expect(page.getByTestId("title").textContent).toBe("About");
        expect(page).toMatchSnapshot();
    });
})
    