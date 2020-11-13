import Header from '@components/Header';
import routes from '@core/config/routes';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header routes={routes} />
            <main>{children}</main>
        </>
    );
};

export default Layout;
