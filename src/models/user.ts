import { IUser } from "../types/user"
import { model, Schema } from "mongoose"

const userSchema: Schema = new Schema(
  {
    sender: {
      type: String,
      required: true,
    },

    originAddress: {
      type: String,
      required: true,
    },

    deliveryAddress: {
      type: String,
      required: true,
    },

    // deliveryArrivalFrom: {
    //   type: Date,
    //   required: true,
    // },

    // deliveryArrivalUntil: {
    //   type: String,
    //   required: true,
    // },

    // description: {
    //   type: String,
    //   required: true,
    // },

    // hasDeliveryMethod: {
    //   type: String,
    //   required: true,
    // },

    // deliveryStatus: {
    //   type: Boolean,
    //   required: true,
    // },

    // courier: {
    //   type: String,
    //   required: false,
    // }
  },
  { timestamps: true }
)

export default model<IUser>("User", userSchema)
