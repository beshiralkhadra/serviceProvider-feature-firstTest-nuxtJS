const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Day = require("../models").Day;
const AttendanceEmployee = require("../models").AttendanceEmployee;
const LeaveApplication = require("../models").LeaveApplication;
const VacationApplication = require("../models").VacationApplication;
const BalanceProvider = require("../models").BalanceProvider;

/////////////////////////////////////////////update working hours
const updateWorkingHoursStatus = async (req, res) => {
  const { status, ProviderId } = req.body;

  const day = await Day.update(
    {
      status: status,
    },
    { where: { ProviderId: ProviderId } }
  )
    .then((resp) => {
      res.send({ message: "working hours status updated" });
    })

    .catch((err) => console.log(err));
};
const updateWorkingHours = (req, res) => {
  const {
    providerUuid,
    sundayT1,
    sundayT2,
    mondayT1,
    mondayT2,
    tuesdayT1,
    tuesdayT2,
    wednesdayT1,
    wednesdayT2,
    thursdayT1,
    thursdayT2,
    fridayT1,
    fridayT2,
    saturdayT1,
    saturdayT2,
    ProviderId,
  } = req.body;
  Day.create({
    providerUuid: providerUuid,
    sundayT1: sundayT1,
    sundayT2: sundayT2,
    mondayT1: mondayT1,
    mondayT2: mondayT2,
    tuesdayT1: tuesdayT1,
    tuesdayT2: tuesdayT2,
    wednesdayT1: wednesdayT1,
    wednesdayT2: wednesdayT2,
    thursdayT1: thursdayT1,
    thursdayT2: thursdayT2,
    fridayT1: fridayT1,
    fridayT2: fridayT2,
    saturdayT1: saturdayT1,
    saturdayT2: saturdayT2,
    ProviderId: ProviderId,
  })
    .then((resp) => console.log({ message: "Added Successfully" }))
    .catch((err) => res.send(err));
};
///
//////////////////////////////check in and check out
const checkInClicked = (req, res) => {
  const { providerUuid, providerName, providerId } = req.body;
  /////////////////////////////
  /// current time and date
  let date = new Date();
  // current hours
  let hours = date.getHours();
  // current minutes
  let minutes = date.getMinutes();
  let currentTime = hours + ":" + minutes;

  let whatDate = date.toISOString().slice(0, 10);
  ///////////////////////
  // console.log(providerUuid, "come hereeeeeeeeeeeeeeeeeeeeeeeeeee uuid");
  AttendanceEmployee.create({
    providerUuid: providerUuid,
    providerName: providerName,
    date: whatDate,
    checkIn: currentTime,
    checkOut: "null",
    ProviderId: providerId,
  })
    .then((resp) => res.send({ message: "Added Successfully" }))
    .catch((err) => res.send(err));
};
/////
const checkOutClicked = async (req, res) => {
  const { status, providerUuid } = req.body;
  let date = new Date();

  let hours = date.getHours();
  // current minutes
  let minutes = date.getMinutes();
  let currentTime = hours + ":" + minutes;
  const attendanceEmployee = await AttendanceEmployee.update(
    {
      checkOut: currentTime,
      status: status,
    },
    { where: { providerUuid: providerUuid, status: "present" } }
  )
    .then((resp) => {
      res.send({ message: "time attendance updated" });
    })

    .catch((err) => res.status(501).send(err.toString()));
};
/////
const getAllTimeAttendance = (req, res) => {
  AttendanceEmployee.findAll({})
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
////////////////////////////////////////
/// accepting and rejecting levave works
const acceptRejectLeaveRequest = async (req, res) => {
  const { leaveId, leaveIdReject, providerUuid, leaveBalance } = req.body;
  if (leaveId) {
    const leaveApplication = await LeaveApplication.update(
      {
        isApproved: "accepted",
      },
      { where: { id: leaveId } }
    )
      .then((resp) => {
        const balanceProvider = BalanceProvider.increment("leaveBalance", {
          by: leaveBalance,
          where: { providerUuid: providerUuid },
        })

          .then((resp) => {
            res.send({ message: "vacation balance updated" });
          })

          .catch((err) => res.status(501).send(err.toString()));
      })

      .catch((err) => res.status(501).send(err.toString()));
  } else {
    const leaveApplication = await LeaveApplication.update(
      {
        isApproved: "refused",
      },
      { where: { id: leaveIdReject } }
    )
      .then((resp) => {
        res.send({ message: "leave request refused" });
      })

      .catch((err) => res.status(501).send(err.toString()));
  }
};
////////////////////////////////////////
/// accepting and rejecting levave works
const acceptRejectvacationRequest = async (req, res) => {
  const {
    vacationId,
    vacationIdReject,
    providerUuid,
    requestedDays,
    vacationType,
  } = req.body;
  if (vacationId) {
    const vacationApplication = await VacationApplication.update(
      {
        isApproved: "accepted",
      },
      { where: { id: vacationId } }
    )
      .then((resp) => {
        if (vacationType == "sick") {
          const balanceProvider = BalanceProvider.decrement(
            { sickBalance: requestedDays },
            { where: { providerUuid: providerUuid } }
          )

            .then((resp) => {
              res.send({ message: "vacation balance updated" });
            })

            .catch((err) => res.status(501).send(err.toString()));
        } else if (vacationType == "annually") {
          const balanceProvider = BalanceProvider.decrement(
            { annualBalance: requestedDays },
            { where: { providerUuid: providerUuid } }
          )

            .then((resp) => {
              res.send({ message: "vacation balance updated" });
            })

            .catch((err) => res.status(501).send(err.toString()));
        }
      })

      .catch((err) => res.status(501).send(err.toString()));
  } else {
    const vacationApplication = await VacationApplication.update(
      {
        isApproved: "refused",
      },
      { where: { id: vacationIdReject } }
    )
      .then((resp) => {
        res.send({ message: "leave request refused" });
      })

      .catch((err) => console.log(err));
  }
};
////////////////////////////////////////////////
/// get sick and annual balances
const getAllSickAndAnnualBalances = (req, res) => {
  const { providerUuid } = req.body;
  if (providerUuid) {
    let condition = providerUuid
      ? { providerUuid: { [Op.eq]: providerUuid } }
      : null;

    BalanceProvider.findAll({
      where: condition,
    })
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(501).send(err.toString()));
  } else {
    BalanceProvider.findAll()
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(501).send(err.toString()));
  }
};

module.exports = {
  updateWorkingHoursStatus,
  updateWorkingHours,
  checkInClicked,
  checkOutClicked,
  getAllTimeAttendance,
  acceptRejectLeaveRequest,
  acceptRejectvacationRequest,
  getAllSickAndAnnualBalances,
};
