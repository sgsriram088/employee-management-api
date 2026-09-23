const express = require('express');
const app = express();  
const port = 3000;


let employees =[
  {
    "id": "EMP001",
    "name": "Arun",
    "department": "IT",
    "role": "Tehnology Analyst"
  },
  {
    "id": "EMP002",
    "name": "Kumar",
    "department": "HR",
    "role": "Process Lead"
  },
  {
    "id": "EMP003",
    "name": "Sri",
    "department": "Management",
    "role": "Associate Consultant"
  }
]

app.use(express.json());

//intialize custom middleware
app.use((req,res,next)=>{
  req.timestamp= new Date();
   console.log(req.method, req.url);
  next();
});

//get 
app.get('/api/employees', (req,res)=>{
  console.log(req.query);
  let department = req.query.department;
  let name = req.query.name;
  let role = req.query.role;
  let page =  req.query.page === undefined? 1 : Number(req.query.page);
  let limit = req.query.limit === undefined ? 10 : Number(req.query.limit);
  console.log(page,limit);
  let filteredEmployees = employees;
    if(department){
       filteredEmployees = filteredEmployees.filter(employee =>  employee.department === department ); 
      }
      if(role){
        filteredEmployees = filteredEmployees.filter(employee =>  employee.role === role ); 
      }
      if(name){
      filteredEmployees = filteredEmployees.filter(employee =>  employee.name === name );     
   }

const  isValid = (page,limit)=>{
if(Number.isInteger(page) && page>=1){
  if(Number.isInteger(limit) && limit>=1){return true};
};
}
if(!isValid(page,limit)){
     return res.status(400).json({
      "page" : page,
      "limit" : limit,
      "message" : "This is invalid Pagination",
     })
}
console.log(page,limit);
  const startindex= (page-1)*limit;
  const lastindex = startindex + limit;
  filteredEmployees = filteredEmployees.slice(startindex,lastindex);
  res.status(200).json(filteredEmployees);
});



//post 
app.post('/api/employees',(req,res)=>{
  console.log(req.body);
  const requiredFields = ["name", "department", "role"];
   const isValid = requiredFields.every((field) => {
  return typeof req.body[field] === "string" && req.body[field].trim().length > 0;
});

if(!isValid){
  return res.status(400).json({
    success: false,
    message: "Invalid data"
  });
}

  
  const newId = `EMP${String(employees.length + 1).padStart(3, '0')}`;

  const newEmployees = req.body;
  newEmployees.id = newId;
  employees.push(newEmployees);
  res.status(201).json(newEmployees)
})

// get with Id
app.get('/api/employees/:id',(req,res)=>{

  console.log(req.timestamp);
  const userid = req.params.id;
  console.log(userid);

  const employee= employees.find(employee =>  employee.id==userid)
  if(!employee){
    res.status(404).json({
      "success" : false
    });
  }else{
    return res.status(200).json({
      "success" : true,
      employee
    });
  }
});

// put 
app.put('/api/employees/:id', (req, res) => {
   // your implementation

   const getid= req.params.id;
   const employee = employees.find(employee => employee.id ==getid);
   console.log(employee);
   if(!employee){
    res.status(404).send("Not Found")
   }else {
    employee.name=req.body.name;
    employee.department=req.body.department;
    employee.role=req.body.role;
    return res.status(200).json(employee)
   }

});


//delete
app.delete('/api/employees/:id',(req,res)=>{
  const getid= req.params.id;
  const employeeexists = employees.find(employee => employee.id === getid);
  if(!employeeexists){
   return res.status(404).json({
      "success": false,
      "message" : "Not Found"
    })
  }
    employees= employees.filter(employee => employee.id!==getid);
    return res.status(200).json(employees)

})
app.listen(port,()=>{
    console.log('log message');
})


