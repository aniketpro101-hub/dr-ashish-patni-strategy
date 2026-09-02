const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5020;

// Serve static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(` Dr. Ashish Patni (Bhavishyam) Strategy Portal Live `);
  console.log(` URL: http://localhost:${PORT}`);
  console.log(` Authored by: Aniket Samant | RoasBodhi.in        `);
  console.log(`====================================================`);
});
