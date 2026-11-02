const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        required: [true, 'Name is required'],
        trim: false
    },
    doUntil: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Task', taskSchema);