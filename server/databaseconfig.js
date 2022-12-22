const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true}).then(() => {
    console.log('DB connected...');
}).catch(err=>{
    console.log('Error connecting DB!!', err.name, err.message);
})

module.exports = mongoose.connection;
