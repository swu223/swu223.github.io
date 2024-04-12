import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    date_created: {
      type: Date,
      immutable: true,
      default: () => Date.now()
    },
    balance: {
      current_balance: {
        type: Number, 
        default: 0
      },
      transactions:[mongoose.SchemaTypes.ObjectId]
    }
  }
)

export const User = mongoose.model('users', userSchema)