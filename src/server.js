require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = new express()
const router = express.Router()

router.get(`/`, async (req, res, next) => {
  res.status(200).send({
    dogs: [`Fido`, `Rover`, `Pussycat`, `Dude`]
  })
})

app.use(cors())
app.use(router)

const port = parseInt(process.env.PORT, 10) || 8000
const host = process.env.HOST || '127.0.0.1'

app.listen(port, host, () => console.log(`Express at: http://${host}:${port}`))
