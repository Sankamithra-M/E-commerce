const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')


const userSchema = new mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String,required:true},
    password:{type:String,required:true,minLength:4},
    phoneNumber:{type:Number},
    address:[
{
    country:{type:String},
    city:{type:String},
    address1:{type:String},
    address2:{type:String},
    zipcode:{type:Number},
    addressType:{type:String}
}
    ],
    role:{type:String,default:user},
avatar:{
    id:{type:String},
    url:{type:String}
},
cretedAt:{type:Date,default:Date.now()}

})

userSchema.pre('save',async function(next){
if(!this.isModified("password")){
    return next()
}
this.password= await bcrypt.hash(this.password,10)

})
userSchema.methods.getJwtToken=function(){
    return jwt.sign({id:this._id} ,process.env.JWT_TOKEN, {expiration:process.env.JWT_EXPIRES})
}

userSchema.methods.comparePassword=async function(enterPassword){
 return await bcrypt.compare(enterPassword,this.Password)   
}


module.exports=mongoose.Model('User',userSchema)