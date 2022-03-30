const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Provider = require("../models").Provider;
const Day = require("../models").Day;
const Service = require("../models").Service;
const Provider_Service = require("../models").Provider_Service;
const Role = require("../models").Role;

const getAllProviders = (req, res) => {
  Provider.findAll()
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
const getAllRoles = (req, res) => {
  Role.findAll()
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
const getAllServices = (req, res) => {
  const { providerId } = req.body;
  let condition = providerId ? { providerId: { [Op.eq]: providerId } } : null;
  Provider_Service.findAll({
    where: condition,
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
const getAllWorkingHours = (req, res) => {
  const { ProviderUuid } = req.body;
  let condition = ProviderUuid
    ? { ProviderUuid: { [Op.eq]: ProviderUuid } }
    : null;
  Day.findAll({
    where: condition,
  })
    .then((resp) => {
      // console.log(resp, "/././././././././././././././.");
      let wholeArrayForWorkingHours = [];
      for (let i = 0; i < resp.length; i++) {
        let workingHoursForEachProvider = {};
        workingHoursForEachProvider.ProviderUuid =
          resp[i].dataValues.ProviderUuid;
        workingHoursForEachProvider.sunday = {
          from: resp[i].dataValues.sunday_first,
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
const bringAllProvidersWithSameRole = (req, res) => {
  const { specifyRole, pageNumber } = req.body;
  // console.log(specifyRole, "/./././././././././././.");
  let perPage = 4;
  let parsePageNumber = parseInt(pageNumber);
  Provider.findAndCountAll({
    where: { RoleId: specifyRole },
    limit: perPage,
    offset: perPage * (parsePageNumber - 1),
  })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};

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
const addHours = (req, res) => {
  Provider.findOne({
    order: [["uuid", "DESC"]],
  })
    .then((resp) => {
      const {
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
      let maxId = resp._previousDataValues.uuid;

      Day.create({
        ProviderUuid: maxId,
        sunday_first: sundayT1,
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
const createService = (req, res) => {
  Provider.findOne({
    order: [["uuid", "DESC"]],
  })
    .then((resp) => {
      const { selectedServices } = req.body;
      let maxId = resp._previousDataValues.uuid;
      let wholeServiceObject = [];
      selectedServices.map((looping) => {
        let serviceObj = {
          providerId: maxId,
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

// const updateDay = async (req, res) => {
//   const {updatedDay} =req.body;
//   console.log(updatedDay)
//    const provider = await Day.update({off_sunday:true}, { where : { id:updatedDay}}
//    ).catch(err => console.log(err));
//    console.log(provider)
//   };
module.exports = {
  getAllProviders,
  addOne,
  addHours,
  createCat,
  createService,
  bringAllProvidersWithSameRole,
  getAllRoles,
  getAllWorkingHours,
  getAllServices,
};
