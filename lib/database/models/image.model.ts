import { Schema, model, models } from "mongoose";

const ImageSchema = new Schema({
    userId: { type: String, required: true },
    prompt: { type: String, required: true },
    image: { type: String },
    createdAt: {
        type: Date,
        default: Date.now,
    },    
});
  

const Image = models.Image || model('Image', ImageSchema);

export default Image;