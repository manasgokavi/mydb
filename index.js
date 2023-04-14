const express = require('express');
const mongoose = require('mongoose');
const db = 'mongodb://manasgokavi55:C2tCciwBWk02HKN@ac-2p9zsb6-shard-00-00.tvsy63x.mongodb.net:27017,ac-2p9zsb6-shard-00-01.tvsy63x.mongodb.net:27017,ac-2p9zsb6-shard-00-02.tvsy63x.mongodb.net:27017/?ssl=true&replicaSet=atlas-1z2c60-shard-0&authSource=admin&retryWrites=true&w=majority';

// C2tCciwBWk02HKN

const app = express();

const userData = new mongoose.Schema({
    fname: String,
    sname:String,
    email: String,
    number: String,
    age: String
  });

  const Student = mongoose.model('student', userData);

  module.exports = Student;

app.use(express.json());

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected")
}).catch((err)=>{
    console.log("Not connected");
})

app.post('/',(req,res)=>{

    const{fname, sname, email, number, age} = req.body;

    console.log(req.body);

    const data = new Student({fname, sname, email, number, age});

    
    data.save().then(()=>{
        console.log("Submitted!!");
    })

})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server Running`)
})