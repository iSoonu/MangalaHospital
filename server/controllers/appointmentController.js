import Appointment from '../models/Appointment.js';
import nodemailer from 'nodemailer';

export const createAppointment = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newAppointment = new Appointment({ name, email, phone, message });
    await newAppointment.save();

    // Email admin
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Appointment Request',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Appointment submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit appointment' });
  }
};
