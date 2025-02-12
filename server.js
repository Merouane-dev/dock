require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware pour JSON

// Configuration MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connexion à MySQL
db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à MySQL:', err);
    return;
  }
  console.log('Connecté à MySQL');
});

// Route de test
app.get('/', (req, res) => {
  res.send('Hello from Node.js API!');
});

// Route pour récupérer les utilisateurs (exemple)
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    } else {
      res.json(results);
    }
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur Node.js démarré sur http://localhost:${port}`);
});
