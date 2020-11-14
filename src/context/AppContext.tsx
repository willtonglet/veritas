import Context from '.';
import { useState } from 'react';

const AppContext: React.FC<PageProps> = ({ children, content }) => {
    const [menuActive, setMenuActive] = useState(0);

    return (
        <Context.Provider value={{ menuActive, setMenuActive, content }}>
            {children}
        </Context.Provider>
    );
};

export default AppContext;
