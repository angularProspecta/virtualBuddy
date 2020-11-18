require('dotenv').config()

//requiring the app.js file
const app = require('./app');

//involking the mongoose conneciton 
require('./db/mongoose');

//accessing the port from the enironmental variable 
const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`port is live on ${port}`);

})