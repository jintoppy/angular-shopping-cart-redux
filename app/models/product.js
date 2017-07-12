import mongoose, {Schema} from 'mongoose';

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is mandatory']
    },
    price: {
        type: Number,
        min: [10, 'You are not giving enough price'],
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

// ProductSchema
//     .virtual('url')
//     .get(() => {
//         return '/products/'+ this.title;
//     });

export default mongoose.model('Product', ProductSchema);