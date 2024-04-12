import mongoose from "mongoose";

const accTransactionSchema = new mongoose.Schema({
  acc_Owner: mongoose.SchemaTypes.ObjectId,
  starting_balance: Number,
  transact_type: String,
  amount: Number,
  date_created:{
    type: Date,
    immutable: true,
    default: () => Date.now()
  },
  ending_balance: Number
})

export const AccTransaction = mongoose.model('accTransactions', accTransactionSchema)