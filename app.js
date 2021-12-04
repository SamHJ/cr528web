const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 3000


app.use(cors())
app.use('/', express.static(path.join(__dirname, 'public')))

app.get("/why-georgia", function (request, response) {
  response.sendFile(__dirname + '/public/why-georgia.html');
});

app.get("/tokenomics", function (request, response) {
  response.sendFile(__dirname + '/public/tokenomics.html');
});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})
