import Header from '@components/Header';
import WhatsAppLink from '@components/WhatsAppLink';
import ContactLink from '@components/ContactLink';
import AppContext from 'context/AppContext';

import routes from '@core/config/routes';

const Layout: React.FC<PageProps> = ({ children, content }) => {
    return (
        <AppContext content={content}>
            <Header routes={routes} />
            <main>{children}</main>
            <WhatsAppLink href="/" />
            <ContactLink href="#contato" />
        </AppContext>
    );
};

export default Layout;
