import nodemailer from 'nodemailer';
import Message from '../models/Message.js';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 587),
  secure: Number(process.env.EMAIL_PORT) === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const contact = new Message({ name, email, message });
    await contact.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_RECEIVER,
      subject: `New portfolio contact from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
    });

    res.status(201).json({ success: true, message: 'Message received. Thank you!' });
  } catch (error) {
    next(error);
  }
};
