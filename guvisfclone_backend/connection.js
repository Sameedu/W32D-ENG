const mongoose = require("mongoose")
exports.connect = () => {
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected")
    } catch(err) {
        console.log(err);

        
    }
}
