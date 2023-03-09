const { Schema } = require('mongoose')

module.exports = new Schema({
    userPhone: { type: 'String' },
    receiverPhone: { type: 'String' },
    messages: {
        content: { type: 'String' },
        date: { type: 'Date' }
    }
}, { timestamps: true })