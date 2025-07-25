//to update record
db.EmployeeData.updateOne({ EmpName: 'Mayank' }, { $set: { EmpAge: 40 } })

//update many field
db.EmployeeData.updateOne({ EmpName: 'Mayank' }, { $set: { EmpAge: 21, EmpSal: 45000 } })

//not update
db.EmployeeData.updateOne({ EmpName: 'Faiz' }, { $set: { EmpAge: 21, Address: 'parade' } })

db.EmployeeData.updateOne({ EmpName: 'Faiz' }, { $set: { EmpAge: 21, Address: 'parade' } }, { upsert: true })


db.EmployeeData.updateOne({ EmpName: 'Aman' }, { $rename: { EmpGender: 'Female', EmpGender: 'Male' } })
db.EmployeeData.updateOne({ EmpName: 'Aman' }, { $rename: { EmpGender: Male } })


//to update many records fields
db.EmployeeData.updateMany({}, { $rename: { Male: 'Gender' } })