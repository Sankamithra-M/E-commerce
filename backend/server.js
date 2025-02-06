const app =require('./app')
const connectDb=require('./db/db')
connectDb()


 

process.on("uncaughtException",(err)=>{
    console.log(`error: ${err.message}`)
    console.log(`submitting down the server for handling the uncaught exception`)

})

if(process.env.NODE_ENV!=='PRODUCTION'){
    require('dotenv').config({path:'backend/config/.env'})
}


const server =app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

//unhandled promise rejection
process.on('unhandledRejection',(err)=>{
    console.log(`server is shuttimg down for ${err.message}`)

    server.close(()=>{
        process.exit(1);
    })
})
