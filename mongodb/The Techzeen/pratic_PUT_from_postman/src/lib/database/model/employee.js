const { default: mongoose } = require("mongoose");

const employeeModel = new mongoose.Schema({
  name: String,
  salary: String,
  dep: String,
});

export const Employee =
  mongoose.models.employees || mongoose.model("employees", employeeModel);
