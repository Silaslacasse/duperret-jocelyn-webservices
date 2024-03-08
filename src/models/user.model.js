import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    lastName : String, 
    firstName: String,
    email: { type:String,  required:'mail obligatoire', unique:true },
    password:{ type:String, required:'mot de passe obligatoire' },
    roles: {type: String, enum: ['user', 'admin'], default: 'user'},
    skills:[{
        type: [Schema.Types.ObjectId],
        ref: "skills"
      }],
    refreshToken:String
},
{ timestamps: true }
);

const userModel = mongoose.model('users',userSchema)

export default userModel