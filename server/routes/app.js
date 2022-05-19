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
  bringAllAssistants,
  bringAllSpecialists,
  getAllRoles,
  getAllWorkingHours,
  getAllServices,
  findAllServicesForUpdate,
  bringAllServicesForUpdateForm,
  bringAllServicesForUpdateFormInElipse,
  addNewRecordSameProvider,
  getMaxUuid,
  updateRelatedTables,
  getProvidersDependOnSearchingInput,
  getAllServicesByServiceId,
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
  updateLeaveForProvider,
  updateVacationForProvider,
  deleteLeaveWork,
  deleteVacation,
} = require("../controllers/providerAppointments");
///////////////////////////////////////////////////////////
const {
  updateWorkingHoursStatus,
  updateWorkingHours,
  checkInClicked,
  checkOutClicked,
  getAllTimeAttendance,
  acceptRejectLeaveRequest,
  acceptRejectvacationRequest,
  getAllSickAndAnnualBalances,
} = require("../controllers/hrSystemController");
/////////////////////////////////////////////////////////////////////////
router.get("/getMaxUuid", getMaxUuid);
router.post("/providers", getAllProviders);
router.get(
  "/getProvidersDependOnSearchingInput/:test",
  getProvidersDependOnSearchingInput
);
router.get("/roles", getAllRoles);
router.get("/serviceswithproviders", getAllServices);
router.get("/getAllServicesByServiceId", getAllServicesByServiceId);
router.post("/workingHours", getAllWorkingHours);

router.get("/getAllTimeAttendance", getAllTimeAttendance);
router.get(
  "/checkProviderAvailabilityForCertainTime/:date/:timeFrom/:timeTo/:providerUuid",
  checkProviderAvailabilityForCertainTime
);

router.post("/create", addOne);
router.post("/createHours", addHours);
router.post("/updateWorkingHours", updateWorkingHours);
router.post("/createCat", createCat);
router.post("/createService", createService);
router.post("/bookAppointment", bookAppointment);
router.post("/bringAllProvidersWithSameRole", bringAllProvidersWithSameRole);
router.post("/bringAllAssistants", bringAllAssistants);
router.post("/bringAllSpecialists", bringAllSpecialists);
router.post(
  "/getAllAppointmentsForSpecificProvider",
  getAllAppointmentsForSpecificProvider
);
router.post("/leaveApplication", leaveApplication);
router.post("/vacationApplication", vacationApplication);
router.post("/findAllServicesForUpdate", findAllServicesForUpdate);
router.post("/bringAllServicesForUpdateForm", bringAllServicesForUpdateForm);
router.post("/checkInClicked", checkInClicked);
router.post(
  "/bringAllServicesForUpdateFormInElipse",
  bringAllServicesForUpdateFormInElipse
);
///routes for getting all balances
router.post("/getAllSickAndAnnualBalances", getAllSickAndAnnualBalances);
///routes for leave and vacations
router.post("/getAllLeavingsForProviders", getAllLeavingsForProviders);
router.post("/getAllVacationsForProviders", getAllVacationsForProviders);
///update routes
router.post("/addNewRecordSameProvider", addNewRecordSameProvider);
router.put("/updateProviderInformation", updateProviderInformation);
router.put("/deleteProvider", deleteProvider);
/// update related tables
router.put("/updateRelatedTables", updateRelatedTables);
router.put("/updateWorkingHoursStatus", updateWorkingHoursStatus);
router.put("/checkOutClicked", checkOutClicked);
router.put("/acceptRejectLeaveRequest", acceptRejectLeaveRequest);
router.put("/acceptRejectvacationRequest", acceptRejectvacationRequest);
router.put("/updateLeaveForProvider", updateLeaveForProvider);
router.put("/updateVacationForProvider", updateVacationForProvider);
router.put("/deleteLeaveWork", deleteLeaveWork);
router.put("/deleteVacation", deleteVacation);

module.exports = router;
