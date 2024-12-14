import mongoose from "mongoose";

const subscribeSchema=new mongoose.Schema({
  subscriber: {
    type: String,
    required: true,
   
  }
},
{ timestamps: true });

export default mongoose.model("subscribe",subscribeSchema);