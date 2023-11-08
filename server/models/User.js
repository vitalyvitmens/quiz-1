const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
	{
		login: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		quizes: [{ type: mongoose.Types.ObjectId, ref: 'Quiz' }],
	},

	{ timestamps: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = User
