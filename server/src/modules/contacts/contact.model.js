import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            unique: true,
            ref: "User"
        },
        first_name: {
            type: mongoose.SchemaTypes.String,
            required: true
        },
        phone: {
            type: mongoose.SchemaTypes.String,
            required: true
        },
    },
    {
        collection: "contacts", 
        timestamps: true,
        versionKey: false,
    }
)

const Contact = mongoose.model("Contact", ContactSchema)

export default Contact;