import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import Message from '../models/Message.js';
import { saveContactFallback } from '../fallbackStore.js';

const transporter = process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS
  ? nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: Number(process.env.EMAIL_PORT) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
  : null;

const hasDbConnection = () => mongoose.connection.readyState === 1;

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if (hasDbConnection()) {
      const contact = new Message({ name, email, message });
      await contact.save();
    } else {
      await saveContactFallback({ name, email, message });
    }

    if (transporter) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_RECEIVER,
        subject: `New portfolio contact from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
      });
    }

    res.status(201).json({ success: true, message: 'Message received. Thank you!' });
  } catch (error) {
    next(error);
  }
};
