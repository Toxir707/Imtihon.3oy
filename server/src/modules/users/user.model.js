import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        name: {
            type: mongoose.SchemaTypes.String,
            required: true
        },
        email: {
            type: mongoose.SchemaTypes.String,
            required: true,
            unique: true,
        },
        password: {
            type: mongoose.SchemaTypes.String,
            required: true
        },
        imageUrl: {
            type: mongoose.SchemaTypes.String,
            required: false
        },
        contact: {
            type: mongoose.SchemaTypes.Array,
            ref: "Group"
        }
    },
    {
        collection: "users", 
        timestamps: true,
        versionKey: false,
    }
)


const User = mongoose.model("User", UserSchema);

export default User;