//Operation on array
db.EmployeeData.updateOne({ EmpName: 'Ali' }, { $set: { 'Knowledge.4': 'C#' } })
db.EmployeeData.updateOne({ EmpName: 'Ali', knowledge: 'C++' }, { $set: { 'knowledge.$': 'C#' } })
db.EmployeeData.updateOne({ EmpName: 'Aman', knowledge: 'C++' }, { $set: { 'knowledge.$': 'C#' } })