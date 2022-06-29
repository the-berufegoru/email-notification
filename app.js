import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import { transporter } from "./config/email.js";
import { emailTemplate } from "./template/email.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  const { email, fullNames } = req.body;

  if (!email || !fullNames) {
    return res.status(400).json({
      message: "Email is required.",
      status: 400,
    });
  }

  transporter.sendMail(
    {
      from: process.env.MAILER_USERNAME,
      to: email,
      subject: "Email Notification Template",
      html: emailTemplate(fullNames),
    },
    (err, info) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Sorry, failed to send email.",
          status: 500,
        });
      }
      console.log(info);
      res.status(200).json({
        message: "Email sent successfully.",
        status: 200,
      });
    }
  );
});

app.listen(PORT, () => {
  console.log(`App Started At http://127.0.0.1:${PORT}`);
});
