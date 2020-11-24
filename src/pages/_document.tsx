import Document, { Html, Head, Main, NextScript } from 'next/document';
import Pixel from '@core/analytics/pixel';

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pt-BR">
                <Head>
                    <Pixel />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
