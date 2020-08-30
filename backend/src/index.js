const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
"mongodb+srv://bora-surfar-admin:CxgPSP3CUhybHLp@cluster0.e0j7x.mongodb.net/bora-surfar?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(3001);
