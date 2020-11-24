import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import { ContactParams } from '@core/api/midleware';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.USER_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { name, phone, email, message } = req.body;

    if (name === '' || phone === '' || email === '' || message === '') {
        res.status(403).send('');
        return;
    }

    const mailerRes = await mailer({ name, phone, message, email });
    res.send(mailerRes);
};

const mailer = ({ name, email, phone, message }: ContactParams) => {
    const from = name && email ? `${name} <${email}>` : `${name || email}`;
    const txt = {
        from,
        to: 'nihonimoveissp@gmail.com',
        subject: `Veritás contato - de ${from}`,
        text: `${message} - Telefone ${phone}`,
        replyTo: from
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(txt, (error, info) => (error ? reject(error) : resolve(info)));
    });
};
