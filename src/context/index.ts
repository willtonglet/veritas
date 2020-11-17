import { createContext, Dispatch, SetStateAction } from 'react';

interface Props extends PageProps {
    menuActive: number;
    setMenuActive: Dispatch<SetStateAction<number>>;
    isScrollBlocked: boolean;
    setScrollBlocked: Dispatch<SetStateAction<boolean>>;
}

export default createContext<Props>({
    menuActive: 0,
    setMenuActive: () => undefined,
    content: {},
    isScrollBlocked: false,
    setScrollBlocked: () => undefined
});
