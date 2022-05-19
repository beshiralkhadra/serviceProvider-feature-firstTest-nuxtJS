const Sequelize = require("sequelize");
const sequelize = require("sequelize");
const Op = Sequelize.Op;
const LeaveApplication = require("../models").LeaveApplication;
const VacationApplication = require("../models").VacationApplication;
const Provider = require("../models").Provider;
const Day = require("../models").Day;
const Service = require("../models").Service;
const Provider_Service = require("../models").Provider_Service;
const Role = require("../models").Role;
const BalanceProvider = require("../models").BalanceProvider;

const getAllProviders = (req, res) => {
  const { uuid, RoleId, major } = req.body;
  if (uuid) {
    let condition = uuid ? { uuid: { [Op.eq]: uuid }, status: "latest" } : null;
    Provider.findAll({
      where: condition,
    })
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(501).send(err.toString()));
  } else if (RoleId) {
    let condition = RoleId
      ? { RoleId: { [Op.eq]: RoleId }, status: "latest" }
      : null;
    Provider.findAll({
      where: condition,
    })
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(501).send(err.toString()));
  } else if (major) {
    let condition = major
      ? { major: { [Op.eq]: major }, status: "latest" }
      : null;
    Provider.findAll({
      where: condition,
    })
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(501).send(err.toString()));
  } else {
    Provider.findAll({
      where: {
        status: "latest",
      },
    })
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(501).send(err.toString()));
  }
};
/////////////////////////////////////////
///searching on some provider
const getProvidersDependOnSearchingInput = (req, res) => {
  const { test } = req.params.test;

  Provider.findAll({
    where: {
      [Op.or]: [
        { firstName: { [Op.like]: "%" + req.params.test + "%" } },
        { lastName: { [Op.like]: "%" + req.params.test + "%" } },
        { education: { [Op.like]: "%" + req.params.test + "%" } },
        { major: { [Op.like]: "%" + req.params.test + "%" } },
        { minor: { [Op.like]: "%" + req.params.test + "%" } },
      ],
    },
  })
    .then((resp) => res.status(200).send(resp))
    .catch((err) => res.status(501).send(err.toString()));
};
/////////////////////////////////////////////
const getAllRoles = (req, res) => {
  Role.findAll()
    .then((resp) => res.status(200).send(resp))
    .catch((err) => res.status(501).send(err.toString()));
};
//////////////////////////////////////////
const getAllServices = (req, res) => {
  const { providerUuid, roleId } = req.body;
  if (providerUuid) {
    let condition = providerUuid
      ? { providerUuid: { [Op.eq]: providerUuid } }
      : null;
    Provider_Service.findAll({
      where: condition,
    })
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(501).send(err.toString()));
  }
};
////////////////////////////////////////
///Get all assistants by service id
const getAllServicesByServiceId = (req, res) => {
  const { serviceId } = req.body;
  let arrayIncludeAllServicesWithProvidersUuid = [];
  let arrayIncludeAllProviders = [];
  let arrayIncludeAllAssistantsWithServices = [];
  let arrayIncludeAllAssistantsWithServicesFiltred = [];
  Provider_Service.findAll()
    .then((resp) => {
      // console.log(resp.length);
      for (let i = 0; i < resp.length; i++) {
        let servicesForEachProvider = {};

        servicesForEachProvider = {
          providerUuid: resp[i].dataValues.providerUuid,
          serviceId: resp[i].dataValues.serviceId,
          service_name: resp[i].dataValues.service_name,
        };
        arrayIncludeAllServicesWithProvidersUuid.push(servicesForEachProvider);
      }
      Provider.findAll().then((resp) => {
        for (let i = 0; i < resp.length; i++) {
          let allProvider = {};

          allProvider = {
            uuid: resp[i].dataValues.uuid,
            firstName: resp[i].dataValues.firstName,
            RoleId: resp[i].dataValues.RoleId,
          };
          arrayIncludeAllProviders.push(allProvider);
        }

        arrayIncludeAllProviders.forEach((element) => {
          if (element.RoleId == "2") {
            arrayIncludeAllServicesWithProvidersUuid.forEach((item) => {
              if (item.providerUuid == element.uuid) {
                arrayIncludeAllAssistantsWithServices.push(item);
              }
            });
          }
        });
        if (serviceId) {
          arrayIncludeAllAssistantsWithServices.forEach((item) => {
            if (item.serviceId == serviceId) {
              arrayIncludeAllAssistantsWithServicesFiltred.push(item);
            }
          });
          res.send(arrayIncludeAllAssistantsWithServicesFiltred);
        }
      });
    })
    .catch((err) => res.status(501).send(err.toString()));
};
//////////////////////////////////////////

const getAllWorkingHours = (req, res) => {
  const { providerUuid } = req.body;
  if (providerUuid) {
    let condition = providerUuid
      ? { providerUuid: { [Op.eq]: providerUuid }, status: "latest" }
      : null;
    Day.findAll({
      where: condition,
    })
      .then((resp) => {
        let wholeArrayForWorkingHours = [];
        for (let i = 0; i < resp.length; i++) {
          let workingHoursForEachProvider = {};
          workingHoursForEachProvider.providerUuid =
            resp[i].dataValues.providerUuid;
          workingHoursForEachProvider.ProviderId =
            resp[i].dataValues.ProviderId;
          workingHoursForEachProvider.sunday = {
            from: resp[i].dataValues.sundayT1,
            to: resp[i].dataValues.sundayT2,
          };
          workingHoursForEachProvider.monday = {
            from: resp[i].dataValues.mondayT1,
            to: resp[i].dataValues.mondayT2,
          };
          workingHoursForEachProvider.tuesday = {
            from: resp[i].dataValues.tuesdayT1,
            to: resp[i].dataValues.tuesdayT2,
          };
          workingHoursForEachProvider.wednesday = {
            from: resp[i].dataValues.wednesdayT1,
            to: resp[i].dataValues.wednesdayT2,
          };
          workingHoursForEachProvider.thursday = {
            from: resp[i].dataValues.thursdayT1,
            to: resp[i].dataValues.thursdayT2,
          };
          workingHoursForEachProvider.friday = {
            from: resp[i].dataValues.fridayT1,
            to: resp[i].dataValues.fridayT2,
          };
          workingHoursForEachProvider.saturday = {
            from: resp[i].dataValues.saturdayT1,
            to: resp[i].dataValues.saturdayT2,
          };
          wholeArrayForWorkingHours.push(workingHoursForEachProvider);
        }
        res.send(wholeArrayForWorkingHours);
      })
      .catch((err) => res.send(err));
  } else {
    Day.findAll({
      where: {
        status: "latest",
      },
    })
      .then((resp) => {
        // console.log(resp[1].dataValues, "check dta coming");

        let wholeArrayForWorkingHours = [];
        for (let i = 0; i < resp.length; i++) {
          let workingHoursForEachProvider = {};
          workingHoursForEachProvider.providerUuid =
            resp[i].dataValues.providerUuid;
          workingHoursForEachProvider.ProviderId =
            resp[i].dataValues.ProviderId;

          workingHoursForEachProvider.sunday = {
            from: resp[i].dataValues.sundayT1,
            to: resp[i].dataValues.sundayT2,
          };
          workingHoursForEachProvider.monday = {
            from: resp[i].dataValues.mondayT1,
            to: resp[i].dataValues.mondayT2,
          };
          workingHoursForEachProvider.tuesday = {
            from: resp[i].dataValues.tuesdayT1,
            to: resp[i].dataValues.tuesdayT2,
          };
          workingHoursForEachProvider.wednesday = {
            from: resp[i].dataValues.wednesdayT1,
            to: resp[i].dataValues.wednesdayT2,
          };
          workingHoursForEachProvider.thursday = {
            from: resp[i].dataValues.thursdayT1,
            to: resp[i].dataValues.thursdayT2,
          };
          workingHoursForEachProvider.friday = {
            from: resp[i].dataValues.fridayT1,
            to: resp[i].dataValues.fridayT2,
          };
          workingHoursForEachProvider.saturday = {
            from: resp[i].dataValues.saturdayT1,
            to: resp[i].dataValues.saturdayT2,
          };
          wholeArrayForWorkingHours.push(workingHoursForEachProvider);
        }
        // console.log(resp[i], dataValues, "loololollollolololololol");
        res.status(200).send(wholeArrayForWorkingHours);
      })
      .catch((err) => res.status(501).send(err.toString()));
  }
};
///////////////////////////////////
const createCat = (req, res) => {
  const { minor } = req.body;
  Service.findAll({
    where: {
      category: {
        [Op.or]: [minor, "defaultCate"],
      },
    },
  })
    .then((resp) => res.status(200).send(resp))
    .catch((err) => res.status(501).send(err.toString()));
};
////////////////////////////////////////////
const bringAllProvidersWithSameRole = (req, res) => {
  const { specifyRole, pageNumber } = req.body;
  // console.log(specifyRole);
  let perPage = 4;
  let parsePageNumber = parseInt(pageNumber);
  Provider.findAndCountAll({
    where: { status: "latest" },
    limit: perPage,
    offset: perPage * (parsePageNumber - 1),
  })
    .then((resp) => res.status(200).send(resp))
    .catch((err) => res.status(501).send(err.toString()));
};
////////////////////////////////////////////////////
const bringAllAssistants = (req, res) => {
  const { specifyRole, pageNumber } = req.body;
  let perPage = 4;
  let parsePageNumber = parseInt(pageNumber);
  Provider.findAndCountAll({
    where: { RoleId: specifyRole, status: "latest" },
    limit: perPage,
    offset: perPage * (parsePageNumber - 1),
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.status(501).send(err.toString()));
};
///////////////////////////////////////////////
const bringAllSpecialists = (req, res) => {
  const { specifyRole, pageNumber } = req.body;
  let perPage = 4;
  let parsePageNumber = parseInt(pageNumber);
  Provider.findAndCountAll({
    where: { RoleId: specifyRole, status: "latest" },
    limit: perPage,
    offset: perPage * (parsePageNumber - 1),
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.status(501).send(err.toString()));
};
/////////////////////////////////////////
const addOne = (req, res) => {
  const {
    username,
    lastName,
    age,
    gender,
    phone,
    education,
    minor,
    category_id,
    role_id,
  } = req.body;

  Provider.create({
    firstName: username,
    lastName: lastName,
    age: age,
    gender: gender,
    phone: phone,
    education: education,
    major: category_id,
    minor: minor,
    RoleId: role_id,
  }).then((resp) => {
    Provider.findOne({
      order: [["createdAt", "DESC"]],
    })
      .then((resp) => {
        let maxProviderId = resp._previousDataValues.id;
        let maxProviderUuid = resp._previousDataValues.uuid;

        BalanceProvider.create({
          providerUuid: maxProviderUuid,
          ProviderId: maxProviderId,
        }).catch((err) => res.send(err));
      })
      .catch((err) => res.send(err));
  });
};
/////////////////////////////////////////////////////
///get max uuid
const getMaxUuid = (req, res) => {
  Provider.findOne({
    order: [["createdAt", "DESC"]],
  })
    .then((resp) => {
      res.send(resp._previousDataValues.uuid);
    })
    .catch((err) => res.status(501).send(err.toString()));
};
/////////////////////////////
const addHours = (req, res) => {
  Provider.findOne({
    order: [["createdAt", "DESC"]],
  })
    .then((resp) => {
      let maxId = resp._previousDataValues.id;

      Provider.findOne({
        order: [["createdAt", "DESC"]],
      }).then((resp) => {
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
        } = req.body;
        let maxUuid = resp._previousDataValues.uuid;
        Day.create({
          ProviderId: maxId,
          providerUuid: maxUuid,
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
        })
          .then((resp) => res.send({ message: "Added Successfully", resp }))
          .catch((err) => res.status(501).send(err.toString()));
      });
    })
    .catch((err) => res.status(501).send(err.toString()));
};
////////////////////////////////////////////////
const createService = (req, res) => {
  Provider.findOne({
    order: [["createdAt", "DESC"]],
  })
    .then((resp) => {
      const { selectedServices, providerUuid, roleId } = req.body;
      let maxId = resp._previousDataValues.id;
      let wholeServiceObject = [];
      selectedServices.map((looping) => {
        let serviceObj = {
          ProviderId: maxId,
          // roleId: roleId,
          providerUuid: providerUuid,
          serviceId: looping.service_id,
          service_name: looping.service_name,
        };
        wholeServiceObject.push(serviceObj);
      }),
        Provider_Service.bulkCreate(wholeServiceObject, {
          returning: true,
        })
          .then((resp) => res.send({ message: "Added Successfully", resp }))
          .catch((err) => res.status(501).send(err.toString()));
    })
    .catch((err) => res.status(501).send(err.toString()));
};
////////////////////////////////////////////////////////////
///update provider information
const updateProviderInformation = (req, res) => {
  const { providerId, status, selectedUpdatedServices } = req.body;
  const provider = Provider.update(
    {
      status: status,
    },
    { where: { id: providerId } }
  );
  let wholeServiceObject = [];
  selectedUpdatedServices.map((looping) => {
    let serviceObj = {
      providerId: providerId,
      providerUuid: looping.providerUuid,
      serviceId: looping.id,
      service_name: looping.service_name,
    };
    wholeServiceObject.push(serviceObj);
  });
  Provider_Service.bulkCreate(wholeServiceObject, {
    updateOnDuplicate: ["service_name", "serviceId"],
  }).catch((err) => res.status(501).send(err.toString()));
};
///add same provider with new information

const addNewRecordSameProvider = (req, res) => {
  const {
    uuid,
    username,
    lastName,
    age,
    gender,
    phone,
    education,
    major,
    minor,
    role_id,
  } = req.body;

  Provider.create({
    uuid: uuid,
    firstName: username,
    lastName: lastName,
    age: age,
    gender: gender,
    phone: phone,
    education: education,
    major: major,
    minor: minor,
    RoleId: role_id,
  })
    .then((resp) => res.send({ message: "Provider updated and added", resp }))
    .catch((err) => res.status(501).send(err.toString()));
};
/// update related tables
const updateRelatedTables = (req, res) => {
  Provider.findOne({
    order: [["createdAt", "DESC"]],
  }).then((resp) => {
    let newProviderId = resp._previousDataValues.id;
    const { providerUuid } = req.body;
    const leaveApplicationUpdate = LeaveApplication.findOne({
      where: { providerUuid: providerUuid },
    });
    if (leaveApplicationUpdate === null) {
      console.log("Not found!");
    } else {
      LeaveApplication.update(
        {
          ProviderId: newProviderId,
        },
        {
          where: {
            providerUuid: providerUuid,
          },
        }
      ).then((resp) => {
        console.log(resp, "Row updated in leaves table");
        const vacationApplicationUpdate = VacationApplication.findOne({
          where: { providerUuid: providerUuid },
        });
        if (vacationApplicationUpdate === null) {
          console.log("Not found!");
        } else {
          VacationApplication.update(
            {
              ProviderId: newProviderId,
            },
            {
              where: {
                providerUuid: providerUuid,
              },
            }
          ).then((resp) => {
            console.log("Row updated in vacation table " + resp);

            const workingHoursUpdate = Day.findOne({
              where: { providerUuid: providerUuid },
            });
            if (workingHoursUpdate === null) {
              console.log("Not found!");
            } else {
              Day.update(
                {
                  ProviderId: newProviderId,
                },
                {
                  where: {
                    providerUuid: providerUuid,
                  },
                }
              ).then((resp) => {
                console.log("Row updated in workingHours table " + resp);

                const updateProviderServicesTable = Provider_Service.findOne({
                  where: { providerUuid: providerUuid },
                });
                if (updateProviderServicesTable === null) {
                  console.log("Not found!");
                } else {
                  Provider_Service.update(
                    {
                      providerId: newProviderId,
                    },
                    {
                      where: {
                        providerUuid: providerUuid,
                      },
                    }
                  ).then((resp) => {
                    res
                      .status(200)
                      .send("Row updated in workingHours table " + resp);
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};
//////////////////////////////////////////////////////////
const findAllServicesForUpdate = (req, res) => {
  const { category } = req.body;
  Service.findAll({
    where: {
      category: {
        [Op.or]: [category, "defaultCate"],
      },
    },
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
///////////////////////////////////////////delete provider
// const deleteProvider = (req, res) => {
//   Provider.destroy({
//     where: {
//       uuid: req.params.uuid,
//     },
//   })
//     .then((resp) => console.log(resp))
//     .catch((err) => res.send(err));
// };
const deleteProvider = async (req, res) => {
  const { status, providerId } = req.body;

  const provider = await Provider.update(
    {
      status: status,
    },
    { where: { id: providerId } }
  )
    .then((resp) => {
      res.send({ message: "Provider Deleted" });
    })

    .catch((err) => console.log(err));
};
///get all services related to update form
const bringAllServicesForUpdateForm = (req, res) => {
  const { specifySpeciality } = req.body;
  console.log(specifySpeciality, "hjsajhssahjajsssahj");
  Service.findAll({
    where: {
      category: specifySpeciality,
    },
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
///get all services related to update form in elipse
const bringAllServicesForUpdateFormInElipse = (req, res) => {
  const { specifySpeciality } = req.body;
  console.log(specifySpeciality, "hjsajhssahjajsssahj");

  Service.findAll({
    where: {
      category: specifySpeciality,
    },
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};

module.exports = {
  getAllProviders,
  addOne,
  getMaxUuid,
  addHours,
  createCat,
  createService,
  bringAllProvidersWithSameRole,
  bringAllAssistants,
  bringAllSpecialists,
  getAllRoles,
  getAllWorkingHours,
  getAllServices,
  updateProviderInformation,
  findAllServicesForUpdate,
  deleteProvider,
  bringAllServicesForUpdateForm,
  bringAllServicesForUpdateFormInElipse,
  addNewRecordSameProvider,
  updateRelatedTables,
  getProvidersDependOnSearchingInput,
  getAllServicesByServiceId,
};
