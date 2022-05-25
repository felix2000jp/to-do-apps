const express = require('express')
const router  = express.Router()
const { get_objects, create_object, update_object, delete_object } = require('../controllers/todo') 

router.route('/').get(get_objects).post(create_object)
router.route('/update/:id').get(update_object)
router.route('/delete/:id').get(delete_object)

module.exports = router