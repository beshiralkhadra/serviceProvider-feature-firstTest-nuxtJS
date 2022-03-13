const router = require("express").Router() 
const {getAll,addOne,addHours,createCat,createService,deleteProvider,updateDay,bringAllProvidersWithSameRole} =require('../controllers/providersControllers')
router.get('/',getAll)
// router.get('/getServices',getServices)
router.post('/create',addOne)
router.post('/createHours',addHours)
// router.delete('/delete/:id',deleteProvider)
router.post('/createCat',createCat)
router.post('/createService',createService)
router.post('/bringAllProvidersWithSameRole',bringAllProvidersWithSameRole)
// router.put('/updateDay',updateDay)

module.exports =router