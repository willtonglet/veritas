import styles from './styles.module.scss';
import clsx from 'clsx';

interface Props {
    className?: string;
    color?: 'primary' | 'secondary' | 'tertiary';
}

const Spinner: React.FC<Props> = ({ className, color = 'primary' }) => {
    return (
        <div className={clsx(styles.spinner, styles[`spinner--${color}`], className)}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default Spinner;
