import { render } from '@testing-library/react';
import EditorPage from '@/pages/editor/index';

describe("Editor Page", () => {
    it("renders editor page correctly", () => {
        const page = render(<EditorPage />);
        expect(page.getByRole("heading", { name: "Halaman Editor" })).toBeInTheDocument();
        expect(page.getByText(/Halaman ini khusus untuk role editor dan admin./i)).toBeInTheDocument();
        expect(page).toMatchSnapshot();
    })
})

