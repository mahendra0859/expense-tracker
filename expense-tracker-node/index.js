const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.info(`Node Server is nunning on port ${PORT}`));
