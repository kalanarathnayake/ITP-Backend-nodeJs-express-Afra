const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); //cors origin
app.use(express.json()); 
const mongoose = require('mongoose');
mongoose.set('strictQuery', false); 
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('ITP Backend API Running');
})

connectMongoDB().then(()=>console.log("MongoDB connected")).catch(err => console.log(err));

async function connectMongoDB() {
  await mongoose.connect('mongodb+srv://crmProj2024:crmProj2024@cluster0.yxxmuu3.mongodb.net/?retryWrites=true&w=majority');
}

app.use('/ticket', require('./route/ticket.route'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})