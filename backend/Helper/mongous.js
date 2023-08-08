const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://rohit:rohit143@cluster0.exbmb6l.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((res) => {
    console.log("Mongoose Connected Sucessfully");
  })
  .catch((err) => {
    console.log(err);
  });
