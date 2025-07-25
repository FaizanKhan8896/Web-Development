//update multiple records
db.EmployeeData.updateMany({ EmpName: { $in: ['Sachin', 'Raju', 'Somya'] } }, { $set: { about: "I am a Cricket Player ! " } })

db.EmployeeData.updateMany({ EmpName: { $nin: ['Sachin', 'Raju', 'Somya'] } }, { $set: { about: "I am a Software Engineer ! " } })


// appropriate matching  case sensitive
db.EmployeeData.find({
    about: /Engineer/
})

// appropriate matching  case insensitive
db.EmployeeData.find({
    about: /engineer/i
})


//charAt(^) start with
db.EmployeeData.find({
    EmpName: /^a/i
})

//Ends with(add $ before string)
db.EmployeeData.find({
    EmpName: /n$/i
})

//3rd char must be a
db.EmployeeData.find({
    EmpName: /^.{2}a/i
})

///2nd last char must be a
db.EmployeeData.find({
    EmpName: /a.{1}$/i
})

db.EmployeeData.updateMany({ EmpName: { $in: ['Sachin', 'Raju', 'Somya'] } }, { $set: { Knowledge: ['C', 'C++', 'Java'] } })
db.EmployeeData.updateMany({ EmpName: { $nin: ['Sachin', 'Raju', 'Somya'] } }, { $set: { knowledge: ['React', 'Express', 'MongoDB'] } })