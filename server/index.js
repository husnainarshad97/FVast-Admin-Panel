var express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const createCheckoutSession = require("./api/checkout");

const app = express();
const port = 8081;

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => res.send("Heloo"));

app.post("/create-checkout-session", createCheckoutSession);

app.listen(port, () => console.log("   LISTENING AT", port));

// module.e xports = app;
