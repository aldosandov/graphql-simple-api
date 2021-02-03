import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
        });

        console.log('>>> DB is connected.');

    } catch(error) {
        console.log('Something went wrong');
        console.log(error);
    }
};


