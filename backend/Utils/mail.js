import nodemailer from 'nodemailer';

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: 'rienzecv@gmail.com',
        pass: 'ijsesbqkzkkiadwe'
    }
});
 
const email = (otp, mail) => {
    let mailDetails = {                                                                                                                                                                                                                            
        from: process.env.MAIL_ID,  
        to: "sridharsp4774@gmail.com",
        subject: 'Verifivation Mail',
        text: `OTP - ${otp}`
    };
    return mailDetails;
}

 
const sendMail = async(otp, mail) => await mailTransporter.sendMail(email(otp, mail), function(err, data) {
    if(err) {
        console.log(err)
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully', {data});
        return 'Email sent successfully'
    }
});

export default sendMail;

