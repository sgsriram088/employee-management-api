
const employees = require("../data/employees");
const requiredFields = ["name", "department", "role"];



//get

const getEmployees = (req, res) => {
  console.log(req.query);
  let department = req.query.department;
  let name = req.query.name;
  let role = req.query.role;
  let page = req.query.page === undefined ? 1 : Number(req.query.page);
  let limit = req.query.limit === undefined ? 10 : Number(req.query.limit);
  console.log(page, limit);
  let filteredEmployees = employees;
  if (department) {
    filteredEmployees = filteredEmployees.filter(
      (employee) => employee.department === department,
    );
  }
  if (role) {
    filteredEmployees = filteredEmployees.filter(
      (employee) => employee.role === role,
    );
  }
  if (name) {
    filteredEmployees = filteredEmployees.filter(
      (employee) => employee.name === name,
    );
  }

  const isValid = (page, limit) => {
    if (Number.isInteger(page) && page >= 1) {
      if (Number.isInteger(limit) && limit >= 1) {
        return true;
      }
    }
  };
  if (!isValid(page, limit)) {
    return res.status(400).json({
      page: page,
      limit: limit,
      message: "This is invalid Pagination",
    });
  }
  console.log(page, limit);
  const startindex = (page - 1) * limit;
  const lastindex = startindex + limit;
  filteredEmployees = filteredEmployees.slice(startindex, lastindex);
  res.status(200).json(filteredEmployees);
};


//post
const createEmployee = (req, res) => {
  console.log(req.body);
  const isValid = requiredFields.every((field) => {
    return (
      typeof req.body[field] === "string" && req.body[field].trim().length > 0
    );
  });

  if (!isValid) {
    return res.status(400).json({
      success: false,
      message: "Invalid data",
    });
  }

  const newId = `EMP${String(employees.length + 1).padStart(3, "0")}`;

  const newEmployee = {
    id: newId,
    name: req.body.name,
    department: req.body.department,
    role: req.body.role,
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};

// get with Id
const getEmployeeById = (req, res) => {
  console.log(req.timestamp);
  const userid = req.params.id;
  console.log(userid);

  const employee = employees.find((employee) => employee.id == userid);
  if (!employee) {
    return res.status(404).json({
      success: false,
    });
  }
  // const error = new Error("Something went wrong");
  // next(error);
  return res.status(200).json({
    success: true,
    employee,
  });
};

// put
const updateEmployee = (req, res) => {
  // your implementation

  const getid = req.params.id;
  const employee = employees.find((employee) => employee.id == getid);

  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "Employee not found",
    });
  } else {
    const isValid = requiredFields.every((field) => {
      return (
        typeof req.body[field] === "string" && req.body[field].trim().length > 0
      );
    });

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid data",
      });
    }
    employee.name = req.body.name;
    employee.department = req.body.department;
    employee.role = req.body.role;
    return res.status(200).json(employee);
  }
};

//delete
const deleteEmployee = (req, res) => {
  const getid = req.params.id;

  const employeeIndex = employees.findIndex(
    (employee) => employee.id === getid
  );

  if (employeeIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }

  employees.splice(employeeIndex, 1);

  return res.status(200).json({
    success: true,
    message: "Employee deleted successfully",
  });
};

module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};