import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://tomato:<db_password>@cluster0.nxndc2p.mongodb.net/food-del',
    )
    .then(() => console.log('DB Connected'));
};
