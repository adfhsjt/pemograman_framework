import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import Analytics from '@/components/analytics/Analytics';

jest.mock('next/script', () => ({
    __esModule: true,
    default: ({ id, src, children }: { id?: string; src?: string; children?: React.ReactNode }) => (
        <script data-testid={id ? `next-script-${id}` : 'next-script-external'} data-src={src}>
            {children}
        </script>
    ),
}));

describe('Analytics Component', () => {
    const oldEnv = process.env;

    beforeEach(() => {
        process.env = { ...oldEnv };
        (useRouter as jest.Mock).mockReset();
        window.gtag = jest.fn();
    });

    afterAll(() => {
        process.env = oldEnv;
    });

    it('renders null when NEXT_PUBLIC_GA_ID is not provided', async () => {
        delete process.env.NEXT_PUBLIC_GA_ID;

        const on = jest.fn();
        const off = jest.fn();

        (useRouter as jest.Mock).mockReturnValue({ events: { on, off } });

        const page = render(<Analytics />);

        expect(page.container.firstChild).toBeNull();
        expect(on).not.toHaveBeenCalled();
    });

    it('registers route tracking and sends gtag page_path on route changes', () => {
        process.env.NEXT_PUBLIC_GA_ID = 'G-TEST123';

        const on = jest.fn();
        const off = jest.fn();

        (useRouter as jest.Mock).mockReturnValue({ events: { on, off } });

        const page = render(<Analytics />);

        expect(page.getByTestId('next-script-external')).toHaveAttribute(
            'data-src',
            'https://www.googletagmanager.com/gtag/js?id=G-TEST123',
        );
        expect(page.getByTestId('next-script-google-analytics')).toBeInTheDocument();

        expect(on).toHaveBeenCalledWith('routeChangeComplete', expect.any(Function));
        const handler = on.mock.calls[0][1] as (url: string) => void;

        handler('/produk/1');
        expect(window.gtag).toHaveBeenCalledWith('config', 'G-TEST123', {
            page_path: '/produk/1',
        });

        page.unmount();
        expect(off).toHaveBeenCalledWith('routeChangeComplete', handler);
    });
});