/**
 * @author - Moobi Kabelo <@elregalo>
 */
import { mailGenerator } from "../config/email.js";

/**
 * It takes a string as an argument and returns an object
 * @param fullNames - The name of the recipient.
 * @returns an object with a body property.
 */
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
