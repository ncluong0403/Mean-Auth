import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      min: 2,
      max: 255,
    },
    last_name: {
      type: String,
      required: true,
      min: 2,
      max: 255,
    },
    username: {
      type: String,
      required: true,
      min: 2,
      max: 255,
      unique: true, // this will make sure that no two users can have the same username
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      unique: true, // this will make sure that no two users can have the same email
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 255, // 255 is the max length of a password
    },
    profileImage: {
      type: String,
      default: "https://www.pngwing.com/en/free-png-xsukd", // this is the default image
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // roles: {
    //   type: [Schema.Types.ObjectId],
    //   ref: "Role", // this is the reference to the Role model
    //   required: true,
    // },
  },
  { timestamps: true } // this will automatically add the createdAt and the updatedAt field for us
);

export default mongoose.model("User", UserSchema);
