const mongoose = require('mongoose');
//destructuring en JS sig nifica que no entrare a todo el objeto solo a la parte { database }
const { database  } = require('./keys');

mongoose.connect(database.URI, {
    useNewUrlPrser: true
})

    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));