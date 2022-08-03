//reques nodemailer to send email
import nodemailer from 'nodemailer';

const sendEmail = async (req, res) => {
    if (req.method === 'POST') {
        
        const { name, email, message } = req.body;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: ''
            }
        });
        const mailOptions = {
            from: 'contact@contactme.com',
            to: 'sung20700@gmail.com',
            subject: 'Sending Email using Node.js',
            text: `${name} ${email} ${message}`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).send('Email sent');
    }
}




export default sendEmail;