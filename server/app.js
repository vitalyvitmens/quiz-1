require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth'))

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
	app.listen(PORT, () => {
		console.log(`http://localhost:${PORT}/`)
		console.log(`Server has been started on port ${PORT}...`)
	})
})
