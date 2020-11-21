import Head from 'next/head';

import Header from '@components/Header';
import WhatsAppLink from '@components/WhatsAppLink';
import ContactLink from '@components/ContactLink';
import AppContext from 'context/AppContext';
import Footer from '@components/Footer';

import routes from '@core/config/routes';

const Layout: React.FC<PageProps> = ({ children, content }) => {
    return (
        <>
            <Head>
                <title>Veritás - Vila Madalena</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="Description" content="Veritás - Vila Madalena"></meta>
            </Head>
            <AppContext content={content}>
                <Header routes={routes} />
                <main>{children}</main>
                <Footer />
                <WhatsAppLink href="/" />
                <ContactLink href="#contato" />
            </AppContext>
        </>
    );
};

export default Layout;
