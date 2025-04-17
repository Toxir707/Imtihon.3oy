import mongoose from "mongoose";
// import Contact from "../contacts/contact.model.js";

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
        contact: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Contact"
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