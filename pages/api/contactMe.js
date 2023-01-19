import config from '../../config';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.address,
    pass: config.email.pass
  }
});

export default function handler(req, res) {
  if (req.method === 'POST') {
    const {name, email, message} = req.body;
    var mailOptions = {
      from: config.email.address,
      to: config.email.address,
      subject: `${name} saw your Portfolio!`,
      text: `
      ${name} wnated to connect after seeing your portfolio. 
      They Sent this message: 

      ${message}

      Reach back out at (email): ${email}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(200).json({ name: 'Post' })
  } else {
    res.status(400).send()
  }
}
