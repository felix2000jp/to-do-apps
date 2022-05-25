const ToDo = require('../models/ToDo')

const get_objects = async (req, res) => {
    try {
        const objects = await ToDo.find()
        res.render('todo.ejs', {objects : objects})
    } catch (error) {
        res.send('Something went wrong')
    }
}

const create_object = async (req, res) => {
    try {
        await ToDo.create(req.body)
        res.redirect('/')
    } catch (error) {
        res.send('Something went wrong')
    }
}

const update_object = async (req, res) => {
    try {
        const { id: todoID } = req.params  
        await ToDo.findById(todoID, function(err, object) {
            object.status = !object.status;
            object.save(function (err) {
                if(err) {
                    console.error('ERROR!');
                }
            })
        }).clone().catch(function(err){ console.log(err)})
        res.redirect('/')
    } catch (error) {
        res.send(error)
    }
}

const delete_object = async (req, res) => {
    try {
        const { id: todoID } = req.params
        await ToDo.findOneAndDelete({ _id: todoID })
        res.redirect('/')
    } catch (error) {
        res.send('Something went wrong')
    }
}

module.exports = { get_objects, create_object, update_object, delete_object }