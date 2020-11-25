import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import { ContactParams } from '@core/api/midleware';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'williamtonglet@gmail.com',
        clientId: ' 1083145152121-v99906i6skrvhn7s70ceo79i42h96e0d.apps.googleusercontent.com',
        clientSecret: '7qRSRCUjUY2D1_E2MZYcmMVD',
        refreshToken:
            '1//04itH0k2rgU7_CgYIARAAGAQSNwF-L9IrRaPND5ahaGDQTsK1zDw_Zg0rrNRSmd-rkDDl9xiev5-TGbdUXfS9M9JI-FkdCZY91W4',
        accessToken:
            'ya29.a0AfH6SMDSNjkF8m0_R0-j0-VoWLT2WanB1hIJlbQHo4JFTl2YZxcMHBsanZvofa_GDmGsWFfHl3XIAHFtRv-Ftg8FchKIYc0oSvpuyvU2RWhaJZFzt09f4IGC6AN4r33RC3XfxvWECHs5lLlUi7YGWS5L5uApceeEI1g4z97ZFSE' //access token variable we defined earlier
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
        to: 'williamtonglet@gmail.com',
        subject: `Veritás contato - de ${from}`,
        text: `${message} - Telefone ${phone}`,
        replyTo: from
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(txt, (error, info) => (error ? reject(error) : resolve(info)));
    });
};
