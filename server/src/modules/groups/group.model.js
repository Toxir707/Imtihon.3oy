import mongoose from "mongoose";

const GroupSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        grname: {
            type: mongoose.SchemaTypes.String,
            required: true
        }
    },
    {
        collection: "groups", 
        timestamps: true,
        versionKey: false,
    }
);

const Group = mongoose.model("Group", GroupSchema)

export default Group;