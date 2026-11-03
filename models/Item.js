const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: false
    },
    doUntil: {
        type: Date,
        required: [true, 'doUntil is required'],
        default: Date.now
    },
    createdAt: {
        type: Date,
        required: [true, 'createdAt is required'],
        default: Date.now
    },
    text: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Task', taskSchema);