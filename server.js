const express = require('express');
const path = require('path');

const app = express();

app.get('/db', (req, res) => {
  res.json({
    "goals": [
      {
        "id": 1,
        "text": "Покупки",
        "color": "green",
        "tasks": [
          {
            "id": 1,
            "text": "Картошка",
            "completed": false
          },
          {
            "id": 2,
            "text": "Лук",
            "completed": true
          }
        ]
      },
      {
        "id": 2,
        "text": "Фронтенд",
        "color": "blue",
        "tasks": [
          {
            "id": 3,
            "text": "Изучить Javascript",
            "completed": false
          },
          {
            "id": 4,
            "text": "Изучить паттерны проектирования",
            "completed": true
          }
        ]
      }
    ]
  }
  );
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);