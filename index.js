const express = require("express");

const app = express();

const PORT = 5000;

const cities = {
  pune: 48,
  mumbai: 46,
  surat: 47,
};

app.get("/", (req, res) => {
  res.send("Hello Node!");
});

app.get("/api/:city", (req, res) => {
  const city = req.params.city;
  if (cities[city] === undefined) {
    res.status(404).json({
      message: "City not found!",
    });
    return;
  }

  res.json({
    name: city,
    temp: cities[city],
  });
});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Invalid Route!",
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
