const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  quantity: {
    type: Number,
    default: 1,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});