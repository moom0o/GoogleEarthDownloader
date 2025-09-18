const express = require('express')
const app = express()
app.get('/kh/v=1001', function (req, res) {
    res.sendFile(__dirname + `/images/${req.query.z}/${req.query.x}/${req.query.x}_${req.query.y}.jpeg`)
})

app.listen(42069)