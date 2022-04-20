const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Provider = require("../models").Provider;
const Day = require("../models").Day;
const Service = require("../models").Service;
const Provider_Service = require("../models").Provider_Service;
const Role = require("../models").Role;
const LeaveApplication = require("../models").LeaveApplication;
const VacationApplication = require("../models").VacationApplication;
const ProviderAppointments = require("../models").ProviderAppointments;

///API that are responsible to check availability for provider
const checkProviderAvailabilityForCertainTime = (req, res) => {
  // const { specifyUuid } = req.body;
  LeaveApplication.count({
    where: {
      date: "2022-04-18",
      ProviderUuid: "aae29160-c44a-4c5d-9eb9-1d60a388492b",
      [Op.or]: {
        from: {
          [Op.between]: ["10:15", "10:45"],
        },

        to: {
          [Op.between]: ["10:15", "10:45"],
        },
      },
    },
  })
    .then((count) => {
      if (count == 0) {
        VacationApplication.count({
          where: {
            ProviderUuid: "aae29160-c44a-4c5d-9eb9-1d60a388492b",

            [Op.and]: {
              from: {
                [Op.lte]: "2022-06-18",
              },

              to: {
                [Op.gte]: "2022-06-18",
              },
            },
          },
        }).then((count2) => {
          if (count2 == 0) {
            ProviderAppointments.count({
              where: {
                ProviderUuid: "aae29160-c44a-4c5d-9eb9-1d60a388492b",

                date: "2022-04-18",
                [Op.or]: {
                  from: {
                    [Op.between]: ["10:15", "10:45"],
                  },

                  to: {
                    [Op.between]: ["10:15", "10:45"],
                  },
                },
              },
            }).then((count3) => {
              if (count3 == 0) {
                let date = new Date();

                let whatDay = date.toLocaleString("en-US", {
                  weekday: "long",
                });
                console.log(whatDay);

                if (whatDay == "Sunday") {
                  Day.count({
                    where: {
                      ProviderUuid: "aae29160-c44a-4c5d-9eb9-1d60a388492b",
                      [Op.and]: {
                        sundayT1: {
                          [Op.lte]: ["10:15", "10:45"],
                        },
                        sundayT2: {
                          [Op.gte]: ["10:15", "10:45"],
                        },
                      },
                    },
                  }).then((count42) => console.log(count42, "sunday"));
                } else if (whatDay == "Monday") {
                  Day.count({
                    where: {
                      ProviderUuid: "aae29160-c44a-4c5d-9eb9-1d60a388492b",
                      [Op.and]: {
                        mondayT1: {
                          [Op.lte]: "10:15",
                        },
                        mondayT2: {
                          [Op.gte]: "10:45",
                        },
                      },
                    },
                  }).then((count42) => console.log(count42, "monday"));
                } else if (whatDay == "Tuesday") {
                  Day.count({
                    where: {
                      ProviderUuid: "aae29160-c44a-4c5d-9eb9-1d60a388492b",
                      [Op.and]: {
                        tuesdayT1: {
                          [Op.lte]: "10:15",
                        },
                        tuesdayT2: {
                          [Op.gte]: "10:45",
                        },
                      },
                    },
                  }).then((count43) => console.log(count43, "tuesday"));
                } else if (whatDay == "Wednesday") {
                  Day.count({
                    where: {
                      ProviderUuid: "aae29160-c44a-4c5d-9eb9-1d60a388492b",
                      [Op.and]: {
                        wednesdayT1: {
                          [Op.lte]: "10:15",
                        },
                        wednesdayT2: {
                          [Op.gte]: "10:45",
                        },
                      },
                    },
                  }).then((count44) => console.log(count44, "wednesday"));
                } else if (whatDay == "Thursday") {
                  Day.count({
                    where: {
                      ProviderUuid: "aae29160-c44a-4c5d-9eb9-1d60a388492b",
                      [Op.and]: {
                        thursdayT1: {
                          [Op.lte]: "10:15",
                        },
                        thursdayT2: {
                          [Op.gte]: "10:45",
                        },
                      },
                    },
                  }).then((count45) => console.log(count45, "thursday"));
                } else if (whatDay == "Friday") {
                  Day.count({
                    where: {
                      ProviderUuid: "aae29160-c44a-4c5d-9eb9-1d60a388492b",
                      [Op.and]: {
                        fridayT1: {
                          [Op.lte]: "10:15",
                        },
                        fridayT2: {
                          [Op.gte]: "10:45",
                        },
                      },
                    },
                  }).then((count46) => console.log(count46, "friday"));
                } else if (whatDay == "Saturday") {
                  Day.count({
                    where: {
                      ProviderUuid: "aae29160-c44a-4c5d-9eb9-1d60a388492b",
                      [Op.and]: {
                        saturdayT1: {
                          [Op.lte]: "10:15",
                        },
                        saturdayT2: {
                          [Op.gte]: "10:45",
                        },
                      },
                    },
                  }).then((count47) => console.log(count47, "saturday"));
                }
              }
            });
          }
        });
      }
    })
    .catch((err) => console.log("not available"));
};

///API for booking appointments
const bookAppointment = (req, res) => {
  const { appointmentDate, appointmentFrom, appointmentTo, providerId } =
    req.body;

  ProviderAppointments.create({
    date: appointmentDate,
    from: appointmentFrom,
    to: appointmentTo,
    ProviderId: providerId,
  })
    .then((resp) => res.send({ message: "Added Successfully" }))
    .catch((err) => res.send(err));
};

///leave and vacation requests
const leaveApplication = (req, res) => {
  const { leaveDate, leaveFrom, leaveTo, reasonToLeave, providerId } = req.body;

  LeaveApplication.create({
    date: leaveDate,
    from: leaveFrom,
    to: leaveTo,
    reason: reasonToLeave,
    ProviderId: providerId,
  })
    .then((resp) => res.send({ message: "Added Successfully" }))
    .catch((err) => res.send(err));
};

const vacationApplication = (req, res) => {
  const {
    vacationFrom,
    vacationTo,
    dateRequested,
    requestedDays,
    vacationType,
    reasonToVacation,
    providerId,
  } = req.body;

  VacationApplication.create({
    date: dateRequested,
    requestedDays: requestedDays,
    vacationType: vacationType,
    from: vacationFrom,
    to: vacationTo,
    reason: reasonToVacation,
    ProviderId: providerId,
  })
    .then((resp) => res.send({ message: "Added Successfully" }))
    .catch((err) => res.send(err));
};
/////////////////////////provider page
const getAllAppointmentsForSpecificProvider = (req, res) => {
  const { specifyId } = req.body;
  // console.log(specifyUuid, "././/././././././././././.");
  ProviderAppointments.findAll({
    where: {
      ProviderId: specifyId,
    },
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
///////////////////////////////////////////////
const getAllLeavingsForProviders = (req, res) => {
  const { ProviderId } = req.body;
  let condition = ProviderId ? { ProviderId: { [Op.eq]: ProviderId } } : null;
  LeaveApplication.findAll({
    where: condition,
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
////////////////////////////////////
const getAllVacationsForProviders = (req, res) => {
  const { ProviderId } = req.body;
  let condition = ProviderId ? { ProviderId: { [Op.eq]: ProviderId } } : null;
  VacationApplication.findAll({
    where: condition,
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
///delete appointment
const deleteProvider = (req, res) => {
  Provider.destroy({
    where: {
      appointmentId: "1",
    },
  })
    .then((resp) => console.log(resp))
    .catch((err) => res.send(err));
};
module.exports = {
  leaveApplication,
  vacationApplication,
  getAllLeavingsForProviders,
  getAllVacationsForProviders,
  //   updateProviderInformation,
  //   findAllServicesForUpdate,
  //   deleteProvider,
  bookAppointment,
  getAllAppointmentsForSpecificProvider,
  checkProviderAvailabilityForCertainTime,
};
