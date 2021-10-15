// Rutas para conectar con la base de datos
const express = require("express");
const employeeRoute = express.Router();

// Modelo del empleado - lleva al Schema
let EmployeeModel = require("../models/Employee");

// Traer empleado
employeeRoute.route("/").get((req, res) => {
  EmployeeModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

// Crear empleado
employeeRoute.route("/create-employee").post((req, res, next) => {
  EmployeeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Editar empleado
employeeRoute.route("/edit-employee/:id").get((req, res) => {
  EmployeeModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
}); 

// Actualizar empleado
employeeRoute.route("/update-employee/:id").put((req, res, next) => {
  EmployeeModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Employee successfully updated!");
      }
    }
  );
}); 
        
// Borrar empleado
employeeRoute.route("/delete-employee/:id").delete((req, res, next) => {
  EmployeeModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ 
        msg: data, 
        });
    }
  });
});

module.exports = employeeRoute;   
