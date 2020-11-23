import { useState } from 'react';
import { VscError } from 'react-icons/vsc';
import InputMask from 'react-input-mask';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    className?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    value: string;
    type?: 'text' | 'email' | 'tel';
    mask?: string | (string | RegExp)[];
    placeholder: string;
    id: string;
}

const Input: React.FC<Props> = ({
    className,
    isRequired = false,
    isDisabled = false,
    value,
    type = 'text',
    mask,
    placeholder,
    id,
    ...rest
}) => {
    const [error, setError] = useState(false);

    const isEmail = (val: string) => {
        const regEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !regEmail.test(val);
    };

    const handleEmail = () =>
        type === 'email' && value && isEmail(value) ? setError(true) : setError(false);

    return (
        <div className={clsx(styles.input, className)}>
            <label htmlFor={id}>{placeholder}</label>
            <InputMask
                id={id}
                mask={mask as string}
                formNoValidate
                onBlur={handleEmail}
                value={value}
                type={type}
                required={isRequired}
                disabled={isDisabled}
                placeholder={placeholder}
                {...rest}
            />
            {error && <VscError color="red" className={styles.input__status} />}
        </div>
    );
};

export default Input;
