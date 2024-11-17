import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    lastMessage: {
        type: Schema.Types.ObjectId,
        ref: "ChatMessage",
    },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    ],
    unread: {
        type: Number,
        default: 0,
    },
},
    { timestamps: true });

let chat;
if (mongoose.modelNames().includes("Chat")) {
    chat = mongoose.model("Chat");
} else {
    chat = mongoose.model("Chat", chatSchema);
}
export default chat;