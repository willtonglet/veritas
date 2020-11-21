import { useState, useEffect } from 'react';
import Context from '.';

const AppContext: React.FC<PageProps> = ({ children, content }) => {
    const [menuActive, setMenuActive] = useState(0);
    const [isScrollBlocked, setScrollBlocked] = useState(false);

    useEffect(() => {
        if (isScrollBlocked) {
            document.body.classList.add('window-blocked');
        } else {
            document.body.classList.remove('window-blocked');
        }
    }, [isScrollBlocked]);

    return (
        <Context.Provider
            value={{ menuActive, setMenuActive, content, isScrollBlocked, setScrollBlocked }}>
            {children}
        </Context.Provider>
    );
};

export default AppContext;
