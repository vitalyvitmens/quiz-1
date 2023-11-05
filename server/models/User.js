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
		qizes: [{ type: mongoose.Types.ObjectId, ref: 'Qize' }],
	},

	{ timestamps: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = User
