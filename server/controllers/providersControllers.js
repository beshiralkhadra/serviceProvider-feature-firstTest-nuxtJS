const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Provider = require("../models").Provider;
const Day = require("../models").Day;
const Service = require("../models").Service;
const Provider_Service = require("../models").Provider_Service;
const Role = require("../models").Role;

const getAllProviders = (req, res) => {
  const { id, RoleId } = req.body;
  if (id) {
    let condition = id ? { id: { [Op.eq]: id }, status: "latest" } : null;
    Provider.findAll({
      where: condition,
    })
      .then((resp) => res.send(resp))
      .catch((err) => res.send(err));
  } else if (RoleId) {
    let condition = RoleId
      ? { RoleId: { [Op.eq]: RoleId }, status: "latest" }
      : null;
    Provider.findAll({
      where: condition,
    })
      .then((resp) => res.send(resp))
      .catch((err) => res.send(err));
  } else {
    Provider.findAll({
      where: {
        status: "latest",
      },
    })
      .then((resp) => res.send(resp))
      .catch((err) => res.send(err));
  }
};

/////////////////////////////////////////////
const getAllRoles = (req, res) => {
  Role.findAll()
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
//////////////////////////////////////////
const getAllServices = (req, res) => {
  const { providerId } = req.body;
  let condition = providerId ? { providerId: { [Op.eq]: providerId } } : null;
  Provider_Service.findAll({
    where: condition,
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
//////////////////////////////////////////
const getAllWorkingHours = (req, res) => {
  const { ProviderId } = req.body;
  let condition = ProviderId ? { ProviderId: { [Op.eq]: ProviderId } } : null;
  Day.findAll({
    where: condition,
  })
    .then((resp) => {
      let wholeArrayForWorkingHours = [];
      for (let i = 0; i < resp.length; i++) {
        let workingHoursForEachProvider = {};
        workingHoursForEachProvider.ProviderId = resp[i].dataValues.ProviderId;
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
};
///////////////////////////////////
const createCat = (req, res) => {
  const { major } = req.body;
  Service.findAll({
    where: {
      category: {
        [Op.or]: [major, "defaultCate"],
      },
    },
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
////////////////////////////////////////////
const bringAllProvidersWithSameRole = (req, res) => {
  const { specifyRole, pageNumber } = req.body;
  // console.log(specifyRole);
  let perPage = 6;
  let parsePageNumber = parseInt(pageNumber);
  Provider.findAndCountAll({
    where: { RoleId: specifyRole, status: "latest" },
    limit: perPage,
    offset: perPage * (parsePageNumber - 1),
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
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
    major,
    minor,
    role_id,
  } = req.body;
  Provider.create({
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
    .then((resp) => res.send({ message: "Added Successfully" }))
    .catch((err) => res.send(err));
};
/////////////////////////////////////////////////////
///get max uuid
const getMaxUuid = (req, res) => {
  Provider.findOne({
    order: [["uuid", "DESC"]],
  })
    .then((resp) => {
      res.send(resp._previousDataValues.uuid);
    })
    .catch((err) => res.send(err));
};
/////////////////////////////
const addHours = (req, res) => {
  Provider.findOne({
    order: [["createdAt", "DESC"]],
  })
    .then((resp) => {
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
      let maxId = resp._previousDataValues.id;
      Day.create({
        ProviderId: maxId,
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
      })
        .then((resp) => res.send({ message: "Added Successfully" }))
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
};
////////////////////////////////////////////////
const createService = (req, res) => {
  Provider.findOne({
    order: [["createdAt", "DESC"]],
  })
    .then((resp) => {
      const { selectedServices, providerUuid } = req.body;
      let maxId = resp._previousDataValues.id;
      let wholeServiceObject = [];
      selectedServices.map((looping) => {
        let serviceObj = {
          providerId: maxId,
          providerUuid: providerUuid,
          serviceId: looping.id,
          service_name: looping.service_name,
        };
        wholeServiceObject.push(serviceObj);
      }),
        Provider_Service.bulkCreate(wholeServiceObject, {
          returning: true,
        })
          .then((resp) => res.send({ message: "Added Successfully" }))
          .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
};
////////////////////////////////////////////////////////////
///update provider information
const updateProviderInformation = async (req, res) => {
  const { providerId, status, selectedUpdatedServices } = req.body;
  // console.log(
  //   providerId,
  //   selectedUpdatedServices,
  //   "lllllllllllllllllllllllllllllllllllllllll"
  // );
  const provider = await Provider.update(
    {
      status: status,
    },
    { where: { id: providerId } }
  );
  let wholeServiceObject = [];

  selectedUpdatedServices.map((looping) => {
    let serviceObj = {
      providerId: providerId,
      serviceId: looping.id,
      service_name: looping.service_name,
    };
    wholeServiceObject.push(serviceObj);
  });
  Provider_Service.bulkCreate(wholeServiceObject, {
    updateOnDuplicate: ["service_name", "serviceId"],
  }).catch((err) => console.log(err));
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
    .then((resp) => resp.send({ message: "Provider updated and added" }))
    .catch((err) => console.log(err, "ppppppppppppppppppppppppppppppp"));
};
//////////////////////////////////////////////////////
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
  // console.log(status);
  const provider = await Provider.update(
    {
      status: status,
    },
    { where: { id: providerId } }
  )
    .then((resp) => res.send({ message: "Provider Deleted" }))

    .catch((err) => console.log(err));
};
///get all services related to update form
const bringAllServicesForUpdateForm = (req, res) => {
  const { specifySpeciality } = req.body;
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
  // console.log(specifySpeciality, "ggggggggggggggggggggggggggggg");
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
  getAllRoles,
  getAllWorkingHours,
  getAllServices,
  updateProviderInformation,
  findAllServicesForUpdate,
  deleteProvider,
  bringAllServicesForUpdateForm,
  bringAllServicesForUpdateFormInElipse,
  addNewRecordSameProvider,
};
