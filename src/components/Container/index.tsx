import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
    className: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
    return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default Container;
