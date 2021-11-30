const { users } = require("../data");

const getAllUser = (req, res) => {
  res.send(users);
  console.log(users);
};

const getUser = (req, res) => {
 console.log(req.body)
   console.log("Inside get user");
  const {nationalID, password} = req.body;
  const foundUser = users.find( (elem) => {
      return (elem.nationalID == nationalID && elem.password == password)
  } );
  if(foundUser)
    res.send(foundUser);
  else
    res.status(404).send("We couldn't find an account matching the email and password you entered. Please check and try again.");
};


const getInformation = (req, res) => {
  const userif = users.find(({ id }) => id === parseInt (req.body.id));
  if (!userif) return res.status(404).send("error");
  res.send(userif);
};

const addNewUser = (req, res) => {
  console.log(req.body);
  const addedUser = {
    name: req.body.name,
    id: req.body.id,
    password: req.body.password,
    drivingLicenses: req.body.drivingLicenses,
    vehicles: req.body.vehicles,
    vehiclesLnsurance: req.body.vehiclesLnsurance,
    passports: req.body.passports,
    trafficViolations: req.body.trafficViolations,
    appointments: req.body.appointments,
  };

  users.push(addedUser);

  res.status(201).send(addedUser);
};

const updateUser = (req, res) => {
  const userId = req.query.id;
  users.forEach((elem, i) => {
    if (i == userId) {
      elem.name = req.body.name;
      elem.id = req.body.id;
      elem.password = req.body.password;
      elem.drivingLicenses = req.body.drivingLicenses;
      elem.vehicles = req.body.vehicles;
      elem.vehiclesLnsurance = req.body.vehiclesLnsurance;
      elem.passports = req.body.passports;
      elem.trafficViolations = req.body.trafficViolations;
      elem.appointments = req.body.appointments;
    }
  });
};

module.exports = {
  getAllUser,
  getUser,
  updateUser,
  addNewUser,
  getInformation,
};
