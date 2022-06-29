import dotenv from "dotenv";
import Mailgen from "mailgen";
import nodemailer from "nodemailer";
dotenv.config();

export const transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST, 
  port: process.env.MAILER_PORT,
  auth: {
    user: process.env.MAILER_USERNAME,
    pass: process.env.MAILER_PASSWORD,
  },
});

export const mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Email Notification",
    link: "https://github.com/elregalo/email-notification",
    logo: "https://github.com/elregalo/email-notification",
    copyright: "© 2022 Email Notification. Made By Moobi Kabelo.",
  },
});
