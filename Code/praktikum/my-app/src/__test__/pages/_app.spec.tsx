import { render } from '@testing-library/react';
import App from '@/pages/_app';
import { createMockRouter } from '@/__test__/utils/router';

jest.mock('next/dynamic', () => {
    return () => function MockAnalytics() {
        return <div data-testid="analytics">Analytics</div>;
    };
});

jest.mock('@/components/layouts/Appshell', () => ({
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="app-shell">{children}</div>
    ),
}));

jest.mock('next-auth/react', () => ({
    SessionProvider: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="session-provider">{children}</div>
    ),
}));

describe('App Page', () => {
    it('renders app shell, analytics, and page component', () => {
        const MockComponent = ({ message }: { message?: string }) => (
            <div data-testid="page-component">Page: {message}</div>
        );

        const page = render(
            <App
                Component={MockComponent as any}
                router={createMockRouter() as any}
                pageProps={{
                    session: { user: { fullname: 'Budi' } },
                    message: 'hello',
                }}
            />,
        );

        expect(page.getByTestId('session-provider')).toBeInTheDocument();
        expect(page.getByTestId('analytics')).toBeInTheDocument();
        expect(page.getByTestId('app-shell')).toBeInTheDocument();
        expect(page.getByTestId('page-component').textContent).toBe('Page: hello');
        expect(page).toMatchSnapshot();
    });
});