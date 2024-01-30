const mongoose = require('mongoose');
mongoose.connect("mongodb://notesapptest-mongo.onrender.com:27017/notes_app_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("Established a connection to the database") )
    .catch( err => console.log("Error connecting to the database: ", err) );
