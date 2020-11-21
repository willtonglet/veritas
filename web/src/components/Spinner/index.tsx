import styles from './styles.module.scss';
import clsx from 'clsx';

interface Props {
    className?: string;
}

const Spinner: React.FC<Props> = ({ className }) => {
    return (
        <div className={clsx(styles.spinner, className)}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default Spinner;
