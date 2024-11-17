import { mongoose, Schema } from "mongoose";

const chatMessagesSchema = new mongoose.Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        content: {
            type: String,
        },
        chat: {
            type: Schema.Types.ObjectId,
            ref: "Chat",
        },
        status: {
            type: String,
        },
        document: {
            type: String,
        },
    },
    { timestamps: true }
);

let ChatMessage;
if (mongoose.modelNames().includes("ChatMessage")) {
    ChatMessage = mongoose.model("ChatMessage");
} else {
    ChatMessage = mongoose.model("ChatMessage", chatMessagesSchema);
}

export default ChatMessage;