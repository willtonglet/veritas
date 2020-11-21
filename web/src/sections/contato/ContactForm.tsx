import { useState } from 'react';
import clsx from 'clsx';
import Input from '@components/Input';
import TextArea from '@components/TextArea';

import styles from './styles.module.scss';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, phone, cellphone, message });

        const response = await fetch('/access', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, cellphone, message })
        });

        const resData = await response.json();

        if (resData.status === 'success') {
            alert('Message Sent');
        } else if (resData.status === 'fail') {
            alert('Message failed to send');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles['contato-form']}>
                <Input
                    isRequired
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    className={styles['contato-form__input-box']}
                    placeholder="Nome"
                />
                <Input
                    isRequired
                    type="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className={styles['contato-form__input-box']}
                    placeholder="E-mail"
                />
                <Input
                    isRequired
                    type="tel"
                    value={phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                    className={styles['contato-form__input-box']}
                    placeholder="Telefone"
                    mask="(99)9999-9999"
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
                />
                <button className={styles['contato-form__button']}>Enviar</button>
            </div>
        </form>
    );
};

export default ContactForm;
