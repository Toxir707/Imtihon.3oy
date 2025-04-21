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
        group: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Group", 
            required: false,
        }]
    },
    {
        collection: "users", 
        timestamps: true,
        versionKey: false,
    }
)


const User = mongoose.model("User", UserSchema);

export default User;