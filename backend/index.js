import express from "express";

const PORT = process.env.PORT || 4000;

const app = express();

app.listen();

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
