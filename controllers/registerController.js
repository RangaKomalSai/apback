import Registration from "../models/Registration.js";
import { sendEmail } from "../services/emailService.js";

export const RegisterTeam = async (req, res) => {
  try {
    const formData = req.body;

    // Create a new registration instance
    const newRegistration = new Registration(formData);

    // Save the form data to the database
    await newRegistration.save();

    // Send confirmation email to the registered user
    const recipientEmail = formData.email;
    const subject =
      "Registration Successful! | Action Plan 2024 | Abhyuday, IIT Bombay";
    const body = `Hello ${formData.teamName},\n\nThank you for registering for the competition. Your registration has been successfully completed.\n\nBest regards,\nTeam Abhyuday, \nIIT Bombay`;

    try {
      await sendEmail(recipientEmail, subject, body);
      console.log("Confirmation email sent.");
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
    }

    // Send a success response
    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Error saving registration:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving registration" });
  }
};
