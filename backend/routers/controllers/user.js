const { users } = require("../data");

const getAllUser = (req, res) => {
  res.send(users);
  console.log(users);
};

const getUser = (req, res) => {
  console.log(typeof users);
  const foundUser = users.filter((elem, i) => {
    return i == req.params.id;
  });

  /* .find => element || undefined
    .filter => [element1, element2], || []
     */

  if (foundUser.length > 0) {
    res.send(foundUser[0]);
    return;
  }
  res.status(404).send("user not found");
};



const addNewUser = (req, res) => {
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

module.exports = { getAllUser, getUser, updateUser, addNewUser };
