const router = require("express").Router() 
const {getAll,addOne,addHours,createCat,createService,deleteProvider,updateDay} =require('../controllers/providersControllers')
router.get('/',getAll)
// router.get('/getServices',getServices)
router.post('/create',addOne)
router.post('/createHours',addHours)
// router.delete('/delete/:id',deleteProvider)
router.post('/createCat',createCat)
router.post('/createService',createService)
// router.put('/updateDay',updateDay)

module.exports =router