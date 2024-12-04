const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  key: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
});

//pre-middleware genrate auto Number
RoleSchema.pre("save", async function (next) {
  try {
    if (this.isNew) {
      const count = await mongoose.model("Role").countDocuments().exec(); 
      this.key = count + 1;
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Role", RoleSchema);
