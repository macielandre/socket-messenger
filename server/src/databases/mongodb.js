const mongoose = require("mongoose")

const { MONGODB_URI } = process.env

let connection = null

class Mongodb {
    static connect() {
        if(connection) {
            return connection
        }

        connection = mongoose.createConnection(MONGODB_URI)

        connection.on('connected', () => {
            console.log('Mongodb connected')
        })

        connection.on('disconnected', () => {
            console.log('Mongodb disconnected, trying to reconnect')

            Mongodb.connect()
        })

        return connection
    }
}

module.exports = Mongodb