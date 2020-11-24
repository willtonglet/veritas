import { AppProps } from 'next/app';
import Head from 'next/head';

import FACEBOOK_PIXEL from 'utils/pixel';

import '@core/styles/global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"
                />
                {name === 'FACEBOOK_PIXEL' && <FACEBOOK_PIXEL />}
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
