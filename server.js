const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const database = [
  { fullName: 'John Doe', state: 'CA', city: 'Los Angeles', zipCode: '90001', details: 'Details for John Doe in Los Angeles, CA 90001' },
  // Add more sample data as needed
];

app.post('/background-check', (req, res) => {
  const { fullName, state, city, zipCode } = req.body;

  const result = database.find(entry => entry.fullName === fullName && entry.state === state);

  if (result) {
    res.json({ details: result.details });
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
