//Array operator
//find records onb the basis of array value
db.EmployeeData.find({ knowledge: 'React' })

//$all eperator : find records onb the basis of both array value
db.EmployeeData.find({ knowledge: { $all: ['React', 'Express'] } })




db.EmployeeData.updateMany({ EmpName: { $in: ['Sachin', 'Aman'] } }, {
    $set: { scores: [100, 99] }
})
db.EmployeeData.updateMany({ EmpName: { $in: ['Fuzail', 'Mayank'] } }, {
    $set: { scores: [50, 90] }
})



//$elemMatch
db.EmployeeData.find({ scores: { $elemMatch: { $gte: 50 } } })

//$push add an element in an array //but add duplicate element if run again
db.EmployeeData.updateMany({ EmpName: /^A/ }, { $push: { knowledge: ['C', 'C++'] } })


db.EmployeeData.updateMany({ EmpName: /^A/ }, { $push: { knowledge: { $each: ['C', 'C++'] } } })

//same as $push but not add duplicate element
db.EmployeeData.updateMany({ EmpName: /^A/ }, { $addToSet: { knowledge: ['C', 'C++'] } })


//$pull to remove element from array
db.EmployeeData.updateMany({ EmpName: /^A/ }, { $pull: { knowledge: ['C', 'C++'] } })