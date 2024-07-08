import { connect } from "mongoose";
import 'dotenv/config'; 

const connectToMongo = async () => {
  try {
    await connect(`mongodb+srv://pratiyushs37:${process.env.mogodb_pas}@cluster0.axod8v1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("---***Database Connected Successfully***---")
  } catch (error) {
    console.log(error);
  }
}

export default connectToMongo;