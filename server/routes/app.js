const router = require("express").Router();
const {
  getAllProviders,
  addOne,
  addHours,
  createCat,
  createService,
  deleteProvider,
  updateProviderInformation,
  bringAllProvidersWithSameRole,
  getAllRoles,
  getAllWorkingHours,
  getAllServices,
  findAllServicesForUpdate,
  bringAllServicesForUpdateForm,
  bringAllServicesForUpdateFormInElipse,
  addNewRecordSameProvider,
  getMaxUuid,
} = require("../controllers/providersControllers");
/////////////////////////////////////////////////////
const {
  checkProviderAvailabilityForCertainTime,
  bookAppointment,
  leaveApplication,
  vacationApplication,
  getAllAppointmentsForSpecificProvider,
  getAllLeavingsForProviders,
  getAllVacationsForProviders,
} = require("../controllers/providerAppointments");
/////////////////////////////////////////////////////////////////////////
router.get("/getMaxUuid", getMaxUuid);
router.get("/providers", getAllProviders);
router.get("/roles", getAllRoles);
router.get("/serviceswithproviders", getAllServices);
router.get("/workingHours", getAllWorkingHours);
router.get("/getAllLeavingsForProviders", getAllLeavingsForProviders);
router.get("/getAllVacationsForProviders", getAllVacationsForProviders);
// router.get('/getServices',getServices)
router.post("/create", addOne);
router.post("/createHours", addHours);
router.get(
  "/checkProviderAvailabilityForCertainTime",
  checkProviderAvailabilityForCertainTime
);

router.post("/createCat", createCat);
router.post("/createService", createService);
router.post("/bookAppointment", bookAppointment);
router.post("/bringAllProvidersWithSameRole", bringAllProvidersWithSameRole);
router.post(
  "/getAllAppointmentsForSpecificProvider",
  getAllAppointmentsForSpecificProvider
);
router.post("/leaveApplication", leaveApplication);
router.post("/vacationApplication", vacationApplication);
router.post("/findAllServicesForUpdate", findAllServicesForUpdate);
router.post("/bringAllServicesForUpdateForm", bringAllServicesForUpdateForm);
router.post(
  "/bringAllServicesForUpdateFormInElipse",
  bringAllServicesForUpdateFormInElipse
);
///update routes
router.put("/updateProviderInformation", updateProviderInformation);
router.post("/addNewRecordSameProvider", addNewRecordSameProvider);
router.put("/deleteProvider", deleteProvider);

module.exports = router;
