/**
 * Created by Roni on 13/10/2014.
 */
exports.send = function(req){
    console.log('Sending mail...');
    var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'icloud',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols

    var mailOptions = {
        from: 'Roni HaCohen <ronihcohen@icloud.com>', // sender address
        to: 'ronihcohen@gmail.com, paulilog@gmail.com', // list of receivers
        subject: req.body.name + ' confirms wedding invite ', // Subject line
        text: req.body.name + ' confirms wedding invite ' // plaintext body
    };

//send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            console.log('user: '+ process.env.MAIL_USER + ' pass: ' + process.env.MAIL_PASS);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });


}