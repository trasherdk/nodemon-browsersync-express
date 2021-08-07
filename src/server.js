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

app.listen(1337, '127.0.0.1', () => console.log(`Express at: http://localhost:1337`))
