const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  key: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
});

PropertySchema.pre("save", async function (next) {
  try {
    if (this.isNew) {
      const count = await mongoose.model("Property").countDocuments().exec();
      this.key = count + 1;
    }
    next();
  } catch (error) {
    next(error);
  }
});
module.exports = mongoose.model("Property", PropertySchema);
