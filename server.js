const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line

// Create the Express app
const app = express();

// Use CORS middleware to allow requests from different origins
app.use(cors()); // Add this line

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

app.use(express.static('public'));


// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Use your MySQL root user
  password: 'Al_Wali038', // Your MySQL root password
  database: 'quoteDB' // The database you created earlier
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Define a POST route to save quote data
app.post('/save-quote', (req, res) => {
  const {
    customer_name,
    vehicle_type,
    quote_date,
    quote_time,
    total_amount,
    vehicle_available,
    hours,
    include_alcohol_policy,
    include_min_hours_policy,
    include_additional_hours,
    include_byob,
    trip_type,
    quote_type,
    // Add other fields here
  } = req.body;

  // Insert into database (example using SQL)
  const sql = `INSERT INTO quotes 
    (customer_name, vehicle_type, quote_date, quote_time, total_amount, vehicle_available, hours, include_alcohol_policy, include_min_hours_policy, include_additional_hours, include_byob, trip_type, quote_type)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const params = [
    customer_name,
    vehicle_type,
    quote_date,
    quote_time,
    total_amount,
    vehicle_available,
    hours,
    include_alcohol_policy,
    include_min_hours_policy,
    include_additional_hours,
    include_byob,
    trip_type,
    quote_type,
  ];

  db.run(sql, params, function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to save quote' });
      return;
    }
    res.json({ message: 'Quote saved successfully!', id: this.lastID });
  });
});



// Define a GET route to retrieve all quotes
app.get('/quotes', (req, res) => {
  const sql = `SELECT * FROM quotes`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to retrieve quotes' });
      return;
    }
    res.json(rows);
  });
});


app.delete('/delete-quote/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM quotes WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting the quote:', err);
      return res.status(500).json({ error: 'Failed to delete quote' });
    }
    res.status(200).json({ message: 'Quote deleted successfully' });
  });
});


// Serve 'data.html' when accessing '/'
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public');
});


// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});



