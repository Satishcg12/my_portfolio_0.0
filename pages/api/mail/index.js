//reques nodemailer to send email
import nodemailer from 'nodemailer';

const {EMAIL_USER,EMAIL_PASS, MY_EMAIL} = process.env;

const sendEmail = async (req, res) => {
    if (req.method === 'POST') {
        
        const { name, email, message } = req.body;
        const transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${EMAIL_USER}`,
                pass: `${EMAIL_PASS}`
            },
        });
        const mailOptions = {
            from: 'contact@contact.com',
            to: `${MY_EMAIL}`,
            subject: `New message from ${name} - ${email}`,
            text: `${name} ${email} ${message}`,
            html: `<h1>${name}</h1><p>${email}</p><p>${message}</p>`
        };
        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return res.status(500).send({ message: error});
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).send({ message: 'Email sent: ' + info.response});
            }
        })
    }
}




export default sendEmail;