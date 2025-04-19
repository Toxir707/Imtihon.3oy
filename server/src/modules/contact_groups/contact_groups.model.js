import mongoose from "mongoose";

const ContactGroupSchema = mongoose.Schema(
  {
    contactId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "Contact"
    },
    groupId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "Group"
    },
  },
  {
    collection: "contact_groups",
    timestamps: true,
    versionKey: false,
  }
);

ContactGroupSchema.index({ contactId: 1, groupId: 1 }, { unique: true });

const ContactGroup = mongoose.model("ContactGroup", ContactGroupSchema);

export default ContactGroup;
