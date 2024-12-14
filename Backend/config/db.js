import mongoose from 'mongoose';


const connectDb = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,        
      useUnifiedTopology: true,    
      serverSelectionTimeoutMS: 5000, 
    });

    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); 
  }
};

export default connectDb;
