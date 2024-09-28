import mongoose from "mongoose";

const { Schema } = mongoose;

const registrationSchema = new Schema(
  {
    teamName: { type: String, required: true },
    teamLeaderName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    profession: { type: String, required: true },
    actionPlanSource: { type: String, required: true },
  },
  { timestamps: true }
);

const Registration = mongoose.model("Registration", registrationSchema);
export default Registration;
