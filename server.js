import express from "express";

// create a server

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});


