const express = require("express");
const app = express();
const port = 3000
const path = require("path")

app.use(express.static(path.join(__dirname,'public')));

// Route to render the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});