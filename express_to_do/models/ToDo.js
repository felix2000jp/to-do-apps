const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 100,
	},
	status: {
		type: Boolean,
		default: false,
	},
},
{
	collection: "todos"
}
)

module.exports = mongoose.model('ToDo', ToDoSchema)
