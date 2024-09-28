import { sendEmail } from "../services/emailService.js";

export const sendTheEmail = async (req, res) => {
  const formData = req.body;
  const recipientEmail = "info.actionplan.iitbombay@gmail.com";
  const subject = "[Action Plan] | New Message from website";
  const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.contactNumber}\nMessage: ${formData.message}`;

  try {
    await sendEmail(recipientEmail, subject, body);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error sending email" });
  }
};
