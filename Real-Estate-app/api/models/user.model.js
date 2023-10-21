import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Duser&psig=AOvVaw2oMGAR6-VqsMbztfsmC3tG&ust=1697993580800000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOD0janNh4IDFQAAAAAdAAAAABAJ",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
