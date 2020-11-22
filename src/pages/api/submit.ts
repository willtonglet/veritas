import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'williamtonglet@gmail.com',
        pass: 'Will_1989'
    }
});

const mailOptions = {
    from: 'williamtonglet@gmail.com',
    to: 'williamtonglet@gmail.com',
    subject: 'test mail',
    html: '<h1>this is a test mail.</h1>'
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
});
