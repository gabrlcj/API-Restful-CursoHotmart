const mongoose = require('mongoose')

function connect() {
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useUnifiedTopology', true)

  mongoose.connect(
    'mongodb://localhost:27017/api-restful?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
  )

  const db = mongoose.connection

  db.once('open', () => {
    console.log('Connected to database!')
  })

  db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
  connect,
}
