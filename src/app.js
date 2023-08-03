const hbs = require('hbs')
const express = require('express')
const app = express()
const port = 5000

app.set('view engin', 'hbs')


const path = require('path')
const puplicDirectory = path.join(__dirname, '../views')
app.use(express.static(puplicDirectory))


// Define routes

app.get('/weather', (req, res) => {
    const country = 'Canada';
    const latitude = 43.6532;
    const longitude = -79.3832;
    const currentWeather = 'Sunny';
    const temperature = '25°C';
    res.send(`
    <html>
      <head>
        <title>Check Weather</title>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/weather">Check Weather</a>
        </nav>
        <h1>Current Weather in ${country}</h1>
        <p>Latitude: ${latitude}</p>
        <p>Longitude: ${longitude}</p>
        <p>Current Weather: ${currentWeather}</p>
        <p>Temperature: ${temperature}</p>
      </body>
    </html>
  `);
})


app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/weather">Check Weather</a>
        </nav>
        <h1>Welcome to my App!</h1>
      </body>
    </html>
  `);
})



// Start the server

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})