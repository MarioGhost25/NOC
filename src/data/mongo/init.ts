import mongoose from 'mongoose';

interface ConnectionsOptions {
    mongoUrl: string;
    //port: number;
    dbName: string;
}

export class MongoDatabase {
  public static async connect(options: ConnectionsOptions) {
    const { mongoUrl, dbName } = options;

    try {
        await mongoose.connect(mongoUrl,{
            dbName: dbName,
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error: ', error);
        throw error;
        
    }
    
  }
}