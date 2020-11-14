import { createContext, Dispatch, SetStateAction } from 'react';

interface Props extends PageProps {
    menuActive: number;
    setMenuActive: Dispatch<SetStateAction<number>>;
}

export default createContext<Props>({
    menuActive: 0,
    setMenuActive: () => undefined,
    content: {}
});
