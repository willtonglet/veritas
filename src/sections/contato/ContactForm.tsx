import { useState } from 'react';
import { VscError, VscCheck } from 'react-icons/vsc';
import clsx from 'clsx';
import Input from '@components/Input';
import TextArea from '@components/TextArea';

import api from '@core/api';

import styles from './styles.module.scss';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const body = { name, email, phone, cellphone, message };
        api.midleware
            .contact(body)
            .then(() => {
                setSuccess(true);
                setError(false);
            })
            .catch(() => {
                setError(true);
                setSuccess(false);
            });
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div className={styles['contato-form']}>
                {(error && (
                    <div className={styles['contato-form__warning']}>
                        <VscError />
                        <span>Houve um problema. Tente novamente.</span>
                    </div>
                )) ||
                    (success && (
                        <div
                            className={clsx(
                                styles['contato-form__warning'],
                                styles['contato-form__warning--success']
                            )}>
                            <VscCheck />
                            <span>Formulário enviado com sucesso!</span>
                        </div>
                    ))}
                <Input
                    isRequired
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    className={styles['contato-form__input-box']}
                    placeholder="Nome"
                    isDisabled={success}
                />
                <Input
                    isRequired
                    type="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className={styles['contato-form__input-box']}
                    placeholder="E-mail"
                    isDisabled={success}
                />
                <Input
                    isRequired
                    type="tel"
                    value={phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                    className={styles['contato-form__input-box']}
                    placeholder="Telefone"
                    mask="(99)9999-9999"
                    isDisabled={success}
                />
                <Input
                    value={cellphone}
                    type="tel"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCellphone(e.target.value)
                    }
                    className={styles['contato-form__input-box']}
                    placeholder="Celular"
                    mask="(99)99999-9999"
                    isDisabled={success}
                />
                <TextArea
                    isRequired
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setMessage(e.target.value)
                    }
                    className={clsx(
                        styles['contato-form__input-box'],
                        styles['contato-form__input-box--full']
                    )}
                    placeholder="Mensagem"
                    isDisabled={success}
                />
                <button
                    aria-label="Enviar"
                    disabled={success}
                    className={styles['contato-form__button']}>
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
