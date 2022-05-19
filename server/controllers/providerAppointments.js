const { response } = require("express");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Provider = require("../models").Provider;
const Day = require("../models").Day;
// const Service = require("../models").Service;
// const Provider_Service = require("../models").Provider_Service;
// const Role = require("../models").Role;
const LeaveApplication = require("../models").LeaveApplication;
const VacationApplication = require("../models").VacationApplication;
const ProviderAppointments = require("../models").ProviderAppointments;

///API that are responsible to check availability for provider
const checkProviderAvailabilityForCertainTime = (req, res) => {
  const { date, timeFrom, timeTo, providerUuid } = req.params;
  LeaveApplication.count({
    where: {
      providerUuid: providerUuid,

      [Op.or]: {
        from: {
          [Op.between]: [timeFrom, timeTo],
        },

        to: {
          [Op.between]: [timeFrom, timeTo],
        },
      },
    },
  })
    .then((count) => {
      if (count == 0) {
        VacationApplication.count({
          where: {
            providerUuid: providerUuid,

            [Op.and]: {
              from: {
                [Op.lte]: date,
              },

              to: {
                [Op.gte]: date,
              },
            },
          },
        }).then((count2) => {
          if (count2 == 0) {
            ProviderAppointments.count({
              where: {
                providerUuid: providerUuid,

                date: date,
                [Op.or]: {
                  from: {
                    [Op.between]: [timeFrom, timeTo],
                  },

                  to: {
                    [Op.between]: [timeFrom, timeTo],
                  },
                },
              },
            }).then((count3) => {
              if (count3 == 0) {
                let date = new Date();

                let whatDay = date.toLocaleString("en-US", {
                  weekday: "long",
                });

                if (whatDay == "Sunday") {
                  Day.count({
                    where: {
                      providerUuid: providerUuid,
                      [Op.and]: {
                        sundayT1: {
                          [Op.lte]: [timeFrom, timeTo],
                        },
                        sundayT2: {
                          [Op.gte]: [timeFrom, timeTo],
                        },
                      },
                    },
                  }).then((count41) => {
                    if (count41 == "0") {
                      res.status(200).send({
                        message: "This Provider Not Available At This Time",
                        count41,
                      });
                    } else {
                      res.status(200).send({
                        message: "This Provider Available At This Time",
                        count41,
                      });
                    }
                  });
                } else if (whatDay == "Monday") {
                  Day.count({
                    where: {
                      providerUuid: providerUuid,
                      [Op.and]: {
                        mondayT1: {
                          [Op.lte]: timeFrom,
                        },
                        mondayT2: {
                          [Op.gte]: timeTo,
                        },
                      },
                    },
                  }).then((count42) => {
                    if (count42 == "0") {
                      res.status(200).send({
                        message: "This Provider Not Available At This Time",
                        count42,
                      });
                    } else {
                      res.status(200).send({
                        message: "This Provider Available At This Time",
                        count42,
                      });
                    }
                  });
                } else if (whatDay == "Tuesday") {
                  Day.count({
                    where: {
                      providerUuid: providerUuid,
                      [Op.and]: {
                        tuesdayT1: {
                          [Op.lte]: timeFrom,
                        },
                        tuesdayT2: {
                          [Op.gte]: timeTo,
                        },
                      },
                    },
                  }).then((count43) => {
                    if (count43 == "0") {
                      res.status(200).send({
                        message: "This Provider Not Available At This Time",
                        count43,
                      });
                    } else {
                      res.status(200).send({
                        message: "This Provider Available At This Time",
                        count43,
                      });
                    }
                  });
                } else if (whatDay == "Wednesday") {
                  Day.count({
                    where: {
                      providerUuid: providerUuid,
                      [Op.and]: {
                        wednesdayT1: {
                          [Op.lte]: timeFrom,
                        },
                        wednesdayT2: {
                          [Op.gte]: timeTo,
                        },
                      },
                    },
                  }).then((count44) => {
                    if (count44 == "0") {
                      res.status(200).send({
                        message: "This Provider Not Available At This Time",
                        count44,
                      });
                    } else {
                      res.status(200).send({
                        message: "This Provider Available At This Time",
                        count44,
                      });
                    }
                  });
                } else if (whatDay == "Thursday") {
                  Day.count({
                    where: {
                      providerUuid: providerUuid,
                      [Op.and]: {
                        thursdayT1: {
                          [Op.lte]: timeFrom,
                        },
                        thursdayT2: {
                          [Op.gte]: timeTo,
                        },
                      },
                    },
                  }).then((count45) => {
                    if (count45 == "0") {
                      res.status(200).send({
                        message: "This Provider Not Available At This Time",
                        count45,
                      });
                    } else {
                      res.status(200).send({
                        message: "This Provider Available At This Time",
                        count45,
                      });
                    }
                  });
                } else if (whatDay == "Friday") {
                  Day.count({
                    where: {
                      providerUuid: providerUuid,
                      [Op.and]: {
                        fridayT1: {
                          [Op.lte]: timeFrom,
                        },
                        fridayT2: {
                          [Op.gte]: timeTo,
                        },
                      },
                    },
                  }).then((count46) => {
                    if (count46 == "0") {
                      res.status(200).send({
                        message: "This Provider Not Available At This Time",
                        count46,
                      });
                    } else {
                      res.status(200).send({
                        message: "This Provider Available At This Time",
                        count46,
                      });
                    }
                  });
                } else if (whatDay == "Saturday") {
                  Day.count({
                    where: {
                      providerUuid: providerUuid,
                      [Op.and]: {
                        saturdayT1: {
                          [Op.lte]: timeFrom,
                        },
                        saturdayT2: {
                          [Op.gte]: timeTo,
                        },
                      },
                    },
                  }).then((count47) => {
                    if (count47 == "0") {
                      res.status(200).send({
                        message: "This Provider Not Available At This Time",
                        count47,
                      });
                    } else {
                      res.status(200).send({
                        message: "This Provider Available At This Time ",
                        count47,
                      });
                    }
                  });
                }
              } else {
                res.status(200).send({
                  message: "This Provider Not Available At This Time beshir",
                });
              }
            });
          } else {
            res.status(200).send({
              message: "This Provider Not Available At This Time beshir",
            });
          }
        });
      } else {
        res.send({
          message: "This Provider Not Available At This Time beshir",
        });
      }
    })
    .catch((err) =>
      res.send({ message: "This Provider Not Available At This Time" })
    );
};

///API for booking appointments
const bookAppointment = (req, res) => {
  const {
    appointmentDate,
    appointmentFrom,
    appointmentTo,
    appointmentId,
    providerId,
    providerUuid,
  } = req.body;

  ProviderAppointments.create({
    date: appointmentDate,
    providerUuid: providerUuid,
    from: appointmentFrom,
    to: appointmentTo,
    appointmentId: appointmentId,
    ProviderId: providerId,
  })
    .then((resp) => res.send({ message: "Added Successfully" }))
    .catch((err) => res.status(501).send(err.toString()));
};

///leave and vacation requests
//////////
const updateLeaveForProvider = async (req, res) => {
  const { leaveIdUpdate } = req.body;
  const leaveApplication = await LeaveApplication.update(
    {
      status: "updated",
    },
    { where: { id: leaveIdUpdate } }
  )
    .then((resp) => {
      res.send({ message: "leave request status updated" });
    })

    .catch((err) => res.status(501).send(err.toString()));
};
//////////
const leaveApplication = (req, res) => {
  const {
    providerName,
    providerUuid,
    leaveDate,
    leaveFrom,
    leaveTo,
    reasonToLeave,
    providerId,
    status,
  } = req.body;

  LeaveApplication.create({
    providerName: providerName,
    providerUuid: providerUuid,
    date: leaveDate,
    from: leaveFrom,
    to: leaveTo,
    reason: reasonToLeave,
    ProviderId: providerId,
    isApproved: status,
  })
    .then((resp) =>
      res.status(200).send({ message: "Added Successfully", resp })
    )
    .catch((err) => res.status(501).send(err.toString()));
};
//////////////////////////////////////////////////
//////
const updateVacationForProvider = async (req, res) => {
  const { vacationIdUpdate } = req.body;
  const vacationApplication = await VacationApplication.update(
    {
      status: "updated",
    },
    { where: { id: vacationIdUpdate } }
  )
    .then((resp) => {
      res
        .status(200)
        .send({ message: "vacation request status updated", resp });
    })

    .catch((err) => res.status(501).send(err.toString()));
};
//////
const vacationApplication = (req, res) => {
  const {
    providerName,
    providerUuid,
    vacationFrom,
    vacationTo,
    dateRequested,
    requestedDays,
    vacationType,
    reasonToVacation,
    providerId,
    status,
  } = req.body;
  VacationApplication.create({
    providerName: providerName,
    providerUuid: providerUuid,
    date: dateRequested,
    requestedDays: requestedDays,
    vacationType: vacationType,
    from: vacationFrom,
    to: vacationTo,
    reason: reasonToVacation,
    ProviderId: providerId,
    isApproved: status,
  })
    .then((resp) => {
      res
        .status(200)
        .send({ message: "vacation request has been sent successfully", resp });
    })
    .catch((err) => res.status(501).send(err.toString()));
};
/////////////////////////provider page
const getAllAppointmentsForSpecificProvider = (req, res) => {
  const { providerUuid } = req.body;
  ProviderAppointments.findAll({
    where: {
      providerUuid: providerUuid,
    },
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.status(501).send(err.toString()));
};
///////////////////////////////////////////////
const getAllLeavingsForProviders = (req, res) => {
  const { providerUuid } = req.body;
  if (providerUuid) {
    let condition = providerUuid
      ? { providerUuid: { [Op.eq]: providerUuid }, status: "latest" }
      : null;
    LeaveApplication.findAll({
      where: condition,
    })
      .then((resp) => res.send(resp))
      .catch((err) => res.status(501).send(err.toString()));
  } else {
    LeaveApplication.findAll({
      where: {
        status: "latest",
      },
    })
      .then((resp) => res.send(resp))
      .catch((err) => res.status(501).send(err.toString()));
  }
};
////////
///delete leave work for provider
const deleteLeaveWork = async (req, res) => {
  const { leaveIdDelete } = req.body;
  const leaveApplication = await LeaveApplication.update(
    {
      status: "deleted",
    },
    { where: { id: leaveIdDelete } }
  )
    .then((resp) => {
      res.send({ message: "leave work status updated to deleted", resp });
    })

    .catch((err) => res.status(501).send(err.toString()));
};
////////
///delete vacation for provider
const deleteVacation = async (req, res) => {
  const { vacationIdDelete } = req.body;
  const leaveApplication = await VacationApplication.update(
    {
      status: "deleted",
    },
    { where: { id: vacationIdDelete } }
  )
    .then((resp) => {
      res.send({ message: "vacation status updated to deleted", resp });
    })

    .catch((err) => res.status(501).send(err.toString()));
};
////////////////////////////////////
const getAllVacationsForProviders = (req, res) => {
  const { providerUuid } = req.body;
  if (providerUuid) {
    let condition = providerUuid
      ? { providerUuid: { [Op.eq]: providerUuid }, status: "latest" }
      : null;
    VacationApplication.findAll({
      where: condition,
    })
      .then((resp) => res.send(resp))
      .catch((err) => res.status(501).send(err.toString()));
  } else {
    VacationApplication.findAll({
      where: {
        status: "latest",
      },
    })
      .then((resp) => res.send(resp))
      .catch((err) => res.status(501).send(err.toString()));
  }
};
///delete appointment
// const deleteProvider = (req, res) => {
//   Provider.destroy({
//     where: {
//       appointmentId: "1",
//     },
//   })
//     .then((resp) => console.log(resp))
//     .catch((err) => res.send(err));
// };
/////////////////////////////////////
///find all provider request

module.exports = {
  leaveApplication,
  vacationApplication,
  getAllLeavingsForProviders,
  getAllVacationsForProviders,
  //   updateProviderInformation,
  //   findAllServicesForUpdate,
  bookAppointment,
  getAllAppointmentsForSpecificProvider,
  checkProviderAvailabilityForCertainTime,
  updateLeaveForProvider,
  updateVacationForProvider,
  deleteLeaveWork,
  deleteVacation,
};
