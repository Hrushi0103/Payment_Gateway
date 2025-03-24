const {  mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  age: { type: Number },
  email: { type: String },
}
)

module.exports = mongoose.model ('customers', userSchema)