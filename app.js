const express = require('express');
const path = require('path');
const app = express();

// Serve the PDF when the root URL is accessed
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'foodcircuit.pdf'); // PDF location
  res.sendFile(filePath);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
