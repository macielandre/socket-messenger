const Chat = require("../models/chat-model")

const chatModel = new Chat()

class ChatService {
    static async createOrUpdateChat({ userPhone, receiverPhone, message }) {
        return chatModel.createOrUpdateChat({ userPhone, receiverPhone, lastMessage: message.content, lastMessageDate: message.date })
    }
}

module.exports = ChatService