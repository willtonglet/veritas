import { AppProps } from 'next/app';
import Head from 'next/head';

import '@core/styles/global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Veritás - Vila Madalena</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="Description" content="Veritás - Vila Madalena"></meta>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
