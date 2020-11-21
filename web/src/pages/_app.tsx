import { AppProps } from 'next/app';

import '@core/styles/global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;
