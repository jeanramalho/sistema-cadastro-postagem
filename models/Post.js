const db = require('./db')

const Post = db.sequelize.define('postagens', {
    type: db.Sequelize.STRING
},

)