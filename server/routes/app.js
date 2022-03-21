const router = require("express").Router();
const {
  getAllProviders,
  addOne,
  addHours,
  createCat,
  createService,
  deleteProvider,
  updateDay,
  bringAllProvidersWithSameRole,
  getAllRoles,
  getAllWorkingHours,
  getAllServices,
} = require("../controllers/providersControllers");
router.get("/providers", getAllProviders);
router.get("/roles", getAllRoles);
router.get("/serviceswithproviders", getAllServices);
router.get("/workingHours", getAllWorkingHours);
// router.get('/getServices',getServices)
router.post("/create", addOne);
router.post("/createHours", addHours);
// router.delete('/delete/:id',deleteProvider)
router.post("/createCat", createCat);
router.post("/createService", createService);
router.post("/bringAllProvidersWithSameRole", bringAllProvidersWithSameRole);
// router.put('/updateDay',updateDay)

module.exports = router;
