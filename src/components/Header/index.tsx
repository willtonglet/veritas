import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import Container from '@components/Container';
import Hamburger from '@components/Hamburger';
import PageProgress from './PageProgress';
import Context from 'context';

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

    const renderLinkClassName = (index: number) =>
        clsx(menuActive === index && styles.active, hasScrolled && styles.scroll);

    useEffect(() => {
        const handleScroll = () => {
            return setHasScrolled(window.scrollY > 600);
        };

        if (typeof window !== 'undefined') window.addEventListener('scroll', handleScroll);

        return () => {
            if (typeof window !== 'undefined') window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderMenu = (
        <ul>
            {routes.map((route, index) => (
                <li key={index}>
                    {route.website ? (
                        <a
                            href={route.website}
                            target="_blank"
                            rel="noreferrer"
                            className={renderLinkClassName(index)}
                            onClick={() => handleActiveMenu(index)}>
                            {route.name}
                        </a>
                    ) : (
                        <a
                            href={route.route}
                            className={renderLinkClassName(index)}
                            onClick={() => handleActiveMenu(index)}>
                            {route.name}
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <div className={styles.header__logo}>
                    <Link href="/">
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
                <div className={styles.header__menu}>{renderMenu}</div>
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
                    {renderMenu}
                </aside>
            </div>

            <PageProgress />
        </header>
    );
};

export default Header;
