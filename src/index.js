const express = require("express")
const app = express()
const path = require('path')
const useragent = require('express-useragent')

const PORT = 5000
const PREFIX = '/hello\.png'

app.use(express.json())
app.use(useragent.express())

app.use(PREFIX, (req, res, next) => {
    console.log('useragent:', req.useragent)
    console.log('lang:', req.acceptsLanguages())
    console.log('ip', req.ip)
    console.log('ips', req.ips)
    next()
})
app.get(PREFIX, express.static(path.join(__dirname, 'img')))

app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}.`)
})