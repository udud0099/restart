import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI);
    await mongoose.connect(
      "mongodb+srv://udud0099:udud0099@cluster0.p8anpn6.mongodb.net/crud_db"
    );
    console.log("connect ok");
  } catch (error) {
    console.log(error);
  }
};
export default connectMongoDB;
