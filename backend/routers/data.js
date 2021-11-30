const users = [
  {
    id:1,
    name: "khalid Mubarak Alahahi",
    nationalID: "222222",
    password: "123456",

    drivingLicenses:{
      LicenseStatus:"Valid",
      IssuingDate:"1434/07/30",
      ExpiryDate:"1444/07/29"
    },
   
    vehicles:{
      modelYear:"2014",
      MajorColor:"white",
      nameCar:"Lexs"
    },
  
    vehiclesLnsurance:{
      PolicyIssueDate:"2021/01/07 12:00 AM",
      PolicyExpireDate:"2022/01/07 12:00 AM"
    },

    passports:{
      vassportType:"Normal",
      issuingPlace:"Saudi Arabia",
      expiryDate:"01/04/2026"
    },
   
    trafficViolations:{
      paidViolations:15,
      unpaidViolations:3
    },

   
   
    appointments:{
      judicialAppointments:0,
      giyasTestAppointments:5

    },
  
  },
  

  
  {
    id:2,
    name: "Ali Mubarak Alshahi",
    nationalID: "111111",
    password: "123456",

   
    drivingLicenses:{
      LicenseStatus:"Valid",
      IssuingDate:"1434/10/29",
      ExpiryDate:"1443/07/10"
    },

    
    vehicles:{
      modelYear:"2020",
      MajorColor:"black",
      nameCar:"GMS"
    },

   
    vehiclesLnsurance:{
      PolicyIssueDate:"2020/02/08 10:00 AM",
      PolicyExpireDate:"2021/02/06 9:00 AM"
    },
    
    passports:{
      vassportType:"spical",
      issuingPlace:"USA",
      expiryDate:"03/01/2024"
    },

  
    trafficViolations:{
      paidViolations:20,
      unpaidViolations:5
    },
  
    appointments:{
      judicialAppointments:1,
      giyasTestAppointments:4

    },
  },
  {
    id:3,
    name: "Ahmad ",
    nationalID: "333333",
    password: "123456",

    
    drivingLicenses:{
      LicenseStatus:"unvalid",
      IssuingDate:"1432/10/10",
      ExpiryDate:"1443/01/10"
    },
  
    vehicles:{
      modelYear:"2019",
      MajorColor:"blue",
      nameCar:"Sequia"
    },
  
    vehiclesLnsurance:{
      PolicyIssueDate:"2021/01/01 08:00 AM",
      PolicyExpireDate:"2022/04/05 10:00 AM"
    },
    
    passports:{
      vassportType:"Normal",
      issuingPlace:"Saudi Arabia",
      expiryDate:"10/10/2025"
    },
    
    trafficViolations:{
      paidViolations:7,
      unpaidViolations:0
    },
    
    appointments:{
      judicialAppointments:1,
      giyasTestAppointments:2

    },
  },
];

module.exports = { users };
