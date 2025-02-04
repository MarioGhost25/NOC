import mongoose from "mongoose";


const logSchema = new mongoose.Schema({

    message:{
        type: String,
        required: true,
    },
    origin:{
        type: String,
    },
    level:{
        type: String,
        enum: ['low', 'medium', 'high'],
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

});

export const LogModel = mongoose.model('Log', logSchema);
