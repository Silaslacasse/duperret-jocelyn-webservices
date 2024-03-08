import mongoose from 'mongoose';
const { Schema } = mongoose;


const projectSchema = new Schema({
    projectName : String, 
    users:[{
        type: Schema.Types.ObjectId,
        ref: "users"
      }],
   
},
{ timestamps: true }
);

const projetModel = mongoose.model('projets',projectSchema)

export default projetModel