import { renderToStaticMarkup } from 'react-dom/server';
import Document from '@/pages/_document';

jest.mock('next/document', () => ({
    __esModule: true,
    Html: ({ children, ...props }: { children: React.ReactNode }) => <html lang="id" {...props}>{children}</html>,
    Head: () => <head />,
    Main: () => <main data-testid="main-content" />,
    NextScript: () => <script data-testid="next-script" />,
}));

describe('Document Page', () => {
    it('renders document structure correctly', () => {
        const markup = renderToStaticMarkup(<Document />);

        expect(markup).toContain('<html lang="id">');
        expect(markup).toContain('<head></head>');
        expect(markup).toContain('<main data-testid="main-content"></main>');
        expect(markup).toContain('<script data-testid="next-script"></script>');
        expect(markup).toMatchSnapshot();
    });
});