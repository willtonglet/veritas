import Context from './Context';
import { useState } from 'react';

const NavContext: React.FC<PageProps> = ({ children, content }) => {
    const [menuActive, setMenuActive] = useState(0);

    return (
        <Context.Provider value={{ menuActive, setMenuActive, content }}>
            {children}
        </Context.Provider>
    );
};

export default NavContext;
