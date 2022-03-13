const Sequelize = require("sequelize");
const Provider = require("../models/Provider");
const Day = require("../models/WorkingHours");
const Service = require("../models/Service");
const Provider_Service = require("../models/provider_service");

const getAll = (req, res) => {
  Provider.findAll()
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};

const createCat = (req, res) => {
  const { major } = req.body;
  Service.findAll({ where: { category: major } })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
};
const bringAllProvidersWithSameRole = (req, res) => {
  const { specifyRole } = req.body;
  Provider.findAll({ where: { role: specifyRole } })
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
    email,
    password,
    education,
    major,
    minor,
    role,
  } = req.body;
  Provider.create({
    firstName: username,
    lastName: lastName,
    age: age,
    gender: gender,
    phone: phone,
    email: email,
    password: password,
    education: education,
    major: major,
    minor: minor,
    role: role,
  })
    .then((resp) => res.send({ message: "Added Successfully" }))
    .catch((err) => res.send(err));
};
const addHours = (req, res) => {
  Provider.findAll({
    attributes: [[Sequelize.fn("max", Sequelize.col("id")), "maxId"]],
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
      let maxId = resp[0].dataValues.maxId;

      Day.create({
        provider_id: maxId,
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
  Provider.findAll({
    attributes: [[Sequelize.fn("max", Sequelize.col("id")), "maxId"]],
  })
    .then((resp) => {
      const { selectedServices } = req.body;
      let maxId = resp[0].dataValues.maxId;
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
module.exports = { getAll, addOne, addHours, createCat, createService,bringAllProvidersWithSameRole };
