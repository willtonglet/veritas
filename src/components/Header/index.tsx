import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import Container from '@components/Container';
import Hamburger from '@components/Hamburger';
import PageProgress from './PageProgress';
import Context from '@context';

import styles from './styles.module.scss';

interface Props {
    routes: Array<{
        route?: string;
        name: string;
        website?: string;
    }>;
}

const Header: React.FC<Props> = ({ routes }) => {
    const [menuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const { menuActive, setMenuActive } = useContext(Context);

    const handleActiveMenu = (active: number) => {
        setMenuActive(active);
        setIsMenuOpen(!menuOpen);
    };

    const renderLinkClassName = (index: number, className: string) =>
        clsx(className, menuActive === index && styles.active, hasScrolled && styles.scroll);

    useEffect(() => {
        const handleScroll = () => {
            return setHasScrolled(window.scrollY > 600);
        };

        if (typeof window !== 'undefined') window.addEventListener('scroll', handleScroll);

        return () => {
            if (typeof window !== 'undefined') window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderMenu = (className: string) => (
        <ul>
            {routes.map(
                (route, index) =>
                    !route.website && (
                        <li key={index}>
                            <a
                                href={route.route}
                                className={renderLinkClassName(index, className)}
                                onClick={() => {
                                    handleActiveMenu(index);
                                    route.name === 'Contato' && fbq('trackCustom', 'Contato');
                                }}>
                                {route.name}
                            </a>
                        </li>
                    )
            )}
        </ul>
    );

    const filterButton = routes.filter((link) => link.website)[0];

    const renderButton = (className: string) => (
        <a
            href={filterButton.website}
            onClick={() => fbq('trackCustom', 'TourVirtual')}
            className={className}
            target="_blank"
            rel="noreferrer">
            {filterButton.name}
        </a>
    );

    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <div className={styles.header__logo}>
                    <Link href="/" prefetch={false}>
                        <a>
                            <img
                                src="logo.svg"
                                alt="Veritás - Vila Madalena"
                                width={233}
                                height={63}
                                loading="eager"
                                className={clsx(hasScrolled && styles.scroll)}
                            />
                        </a>
                    </Link>
                </div>
                <div className={styles.header__menu}>
                    {renderMenu(styles.header__menu__route)}
                    {renderButton(styles.header__menu__link)}
                </div>
            </Container>
            <div className={styles.header__loader} />
            <div className={styles.header__mobile}>
                <Hamburger
                    isActive={menuOpen}
                    onClick={() => setIsMenuOpen(!menuOpen)}
                    className={styles.header__mobile__button}
                />
                <aside
                    className={clsx(
                        styles.header__mobile__drawer,
                        menuOpen && styles['header__mobile__drawer--open']
                    )}>
                    {renderMenu(styles.header__mobile__route)}

                    {renderButton(styles.header__mobile__link)}
                </aside>
            </div>

            <PageProgress />
        </header>
    );
};

export default Header;
