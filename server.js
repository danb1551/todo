const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Task = require('./models/Item');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));


app.get('/api/tasks', async (req, res) => {
    try {
        const allTasks = await Task.find({});
        res.status(201).json(allTasks);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})



//... funkční
app.get('/', (req, res) => {
    res.render("home")
});

app.post('/api/tasks', async (req, res) => {
    try {
        const newItem = await Task.create(req.body);
        //const item = new Task({
        //    id: Math.floor(Math.random() * 10000000000000),
        //    title: req.body.title,
        //    doUntil: req.body.doUntil,
        //    createdAt: req.body.createdAt,
        //    text: req.body.text
        //})
        //await item.save();
        //res.status(201).json(newItem);
        res.redirect('/');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

app.delete('/api/tasks/:id', async (req, res) => {
    try {
        await Task.deleteOne({_id: req.params.id})
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

app.listen(port, () => {
    console.log(`Todo app on http://127.0.0.1:${port}`)
})