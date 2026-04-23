import { render } from '@testing-library/react';
import HalamanAdmin from "@/pages/admin";

describe("HalamanAdmin", () => {
    it("renders admin page correctly", () => {
        const page = render(<HalamanAdmin />);
        expect(page.getByRole("heading", { name: "Halaman Admin" })).toBeInTheDocument();
        expect(page.getByText(/Selamat datang di halaman admin/i)).toBeInTheDocument();
        expect(page).toMatchSnapshot();
    });
})
    