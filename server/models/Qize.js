const mongoose = require('mongoose')
const validator = require('validator')

const QizeSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
			validate: {
				validator: validator.isURL,
				message: 'Image should be a valid url',
			},
		},
		content: {
			type: String,
			required: true,
		},
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
		views: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
)

const Qize = mongoose.model('Qize', QizeSchema)

module.exports = Qize
