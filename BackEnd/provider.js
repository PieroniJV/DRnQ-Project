const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//stop cors policy error
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//creating connection with mongo database
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority');
}

const employeeSchema = new mongoose.Schema({
    name: String,
    location: String,
    position: String
});

const employeeModel = mongoose.model('Employees', employeeSchema);

app.post('/api/employees', (req, res) => {
    console.log(req.body);

    employeeModel.create({
        name: req.body.name,
        id: req.body.id,
        position: req.body.position
    })

    res.send('Data Recieved');
})

app.get('/api/employees', (req, res) => {
    employeeModel.find((error, data) => {
        res.json(data);
    })
})

app.get('/api/employee/:id', (req, res) => {
    console.log(req.params.id);
    employeeModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.put('/api/employee/:id', (req, res) => {
    console.log('Updated: ' + req.params.id)
    employeeModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, data) => {
      res.send(data);
    })
  })

  app.delete('/api/employee/:id', (req, res) => {
    console.log('Deleting: ' + req.params.id);
    employeeModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
      res.send(data);
    })
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})