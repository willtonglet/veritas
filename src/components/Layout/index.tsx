import Header from '@components/Header';
import WhatsAppLink from '@components/WhatsAppLink';
import ContactLink from '@components/ContactLink';
import NavContext from 'context';

import routes from '@core/config/routes';

const Layout: React.FC<PageProps> = ({ children, content }) => {
    return (
        <NavContext content={content}>
            <Header routes={routes} />
            <main>{children}</main>
            <WhatsAppLink href="/" />
            <ContactLink href="#contato" />
        </NavContext>
    );
};

export default Layout;
