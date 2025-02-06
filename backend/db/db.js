const mongoose = require('mongoose')

const connectDb=async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`mongoDb connected successfully`)
    }
    catch(e){
        console.log(`someting went wrong : ${e.message}`)
        process.exit(0)
    }
}
module.exports= connectDb