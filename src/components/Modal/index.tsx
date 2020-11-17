import { useEffect, useRef, useContext } from 'react';
import { VscClose } from 'react-icons/vsc';

import Reveal from '@components/Reveal';
import Content from '@components/Content';
import AppContext from 'context';

import styles from './styles.module.scss';

interface Props {
    isOpen: boolean;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    title?: string;
}

const Modal: React.FC<Props> = ({ children, isOpen = false, onClose, title }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const { setScrollBlocked } = useContext(AppContext);

    const handleClickOutside = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        isOpen && !modalRef.current?.contains(e.target as Node) && onClose(e);

    useEffect(() => setScrollBlocked(isOpen), [isOpen]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside as () => void);
        return () => document.removeEventListener('click', handleClickOutside as () => void);
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div className={styles.modal}>
                    <Reveal animation="top" duration={700}>
                        <div className={styles.modal__wrapper} ref={modalRef}>
                            <div className={styles.modal__container} ref={modalRef}>
                                <button onClick={onClose} className={styles.modal__close}>
                                    <VscClose />
                                </button>
                                {title && (
                                    <Content tag="h3" className={styles.modal__title}>
                                        {title}
                                    </Content>
                                )}

                                {children}
                            </div>
                        </div>
                    </Reveal>
                </div>
            )}
        </>
    );
};

export default Modal;
