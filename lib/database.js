const mongoose = require("mongoose");

const uri =
  "mongodb+srv://Dgyimah:29M2skGj5lRqjKp9@cluster0.n4uru.mongodb.net/PaseCovidAPI?retryWrites=true&w=majority";
const clusterUri = "mongodb cluster url";

mongoose.connect(clusterUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const schema = mongoose.Schema({
  Country: String,
  Active: Number,
  Deaths: Number,
  Recoveries: Number,
  Confirmed: Number,
  UpdatedOn: String,
});

const Case = mongoose.model("Cases", schema);

module.exports = Case;
