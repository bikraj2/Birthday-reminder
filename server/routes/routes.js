const express  = require('express')

const routes = express.Router();

const {birthday,createBirthday,deleteBirthday,updateBirthday} = require('../controller/birthday')
routes.use('/').get(birthday).post(createBirthday)
routes.use('/:id').get(deleteBirthday).patch(updateBirthday)