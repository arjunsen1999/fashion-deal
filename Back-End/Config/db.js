const mongoose = require('mongoose');

const Connection = () =>{
  mongoose.connect(process.env.MONGODB_URL).then(() =>{
    console.log({msg : "Connection Successful!"});
  }).catch((error) =>{
    console.log({msg : `Connection Failed!`})
  })
}


module.exports = {Connection};