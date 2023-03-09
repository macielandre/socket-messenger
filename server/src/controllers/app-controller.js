const ChatService = require("../services/chat-service")

class AppController {
    static async onData({ userPhone, receiverPhone, message }) {
        // TODO: implement validation

        return ChatService.createOrUpdateChat({ userPhone, receiverPhone, message })
    }
}

module.exports = AppController
