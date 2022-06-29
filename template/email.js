import { mailGenerator } from "../config/email.js";

export const emailTemplate = (fullNames) => {
  const email = {
    body: {
      title: "Email Notification Template",
      intro: `Hi ${fullNames}. Thank your using email notification`,
      action: {
        instructions: "To view complete code, please click on buttons bellow.",
        button: {
          color: "blue",
          text: "View on Github",
          link: "https://github.com/elregalo/email-notification",
        },
      },
      outro: "",
      signature: false,
    },
  };
  return mailGenerator.generate(email);
};
