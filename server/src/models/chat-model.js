const Mongodb = require('../databases/mongodb')
const schema = require('../schemas/chat-schema')

class Chat {
    constructor() {
        this.connection = Mongodb.connect()
        this.model = this.connection.model('chat', schema, 'chat')
    }

    async createOrUpdateChat({ userPhone, receiverPhone, lastMessage, lastMessageDate }) {
        return this.model.findOneAndUpdate(
            { userPhone, receiverPhone }, 
            { $push: { messages: { content: lastMessage, date: lastMessageDate} } }, 
            { upsert: true, new: true }
        )
    }
}

module.exports = Chat