import nodemailer from 'nodemailer';
import { ContactParams } from '@core/api/midleware';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'williamtonglet@gmail.com',
        pass: 'Will_1989'
    }
});

export default async (
    req: { body: ContactParams },
    res: { status(arg: number): { send(arg: string): void }; send(arg: unknown): void }
): Promise<void> => {
    const { name, phone, email, message, cellphone } = req.body;

    if (name === '' || phone === '' || email === '' || message === '') {
        res.status(403).send('');
        return;
    }

    const mailerRes = await mailer({ name, phone, cellphone, message, email });
    res.send(mailerRes);
};

const mailer = ({ name, email, phone, cellphone, message }: ContactParams) => {
    const from = name && email ? `${name} <${email}>` : `${name || email}`;
    const txt = {
        from,
        to: 'williamtonglet@gmail.com',
        subject: `Veritás contato - de ${from}`,
        text: `${message} - Telefone ${phone} ${cellphone && `| Celular: ${cellphone}`}`,
        replyTo: from
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(txt, (error, info) => (error ? reject(error) : resolve(info)));
    });
};
