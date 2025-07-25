// 1. to show all databases
// "show dbs"
// "show databases"


//2. to create database
// "use Allenhouse25_DB"

//3. to create collection or table
// Syntax : db.createCollection("CollectionName")
// "db.createCollection("EmployeeData ")"

//4.  To insert into collection
// Syntax : db.CollectionName.insertOne({EmpName:"Sachin",EmpGender:"Male",EmpEmail:"sachin@gmail.com",EmpAge:47,EmpSal:56700})
// db.EmployeeData.insertOne({EmpName:"Sachin",EmpGender:"Male",EmpEmail:"sachin@gmail.com",EmpAge:47,EmpSal:56700})


//4. To select the record from Collection
// Syntax : db.CollectionName.find()
// db.EmployeeData.find()

//5. to insert many records into collection(an array of objects)
// db.EmployeeData.insertMany([
//     { EmpName: "Raju", EmpGender: "Male", EmpEmail: "raju@gmail.com", EmpAge: 48, EmpSal: 45700 },
//     { EmpName: "Somya", EmpGender: "Female", EmpEmail: "somya@gmail.com", EmpAge: 42, EmpSal: 58000 },
//     { EmpName: "Fuzail", EmpGender: "Male", EmpEmail: "fuzail@gmail.com", EmpAge: 21, EmpSal: 156700 }
// ])


//6. create collection as well ad  insert into collection together
// db.Product_Master.insertOne({ ProName: "S24 Ultra", ProComp: "Samsung", ProPrice: 124000, ProRatings: 4.7, ProFeatures: ["100x zoom", "stylus", "Super Amoled"] })


//7. to show collections
// show collections


//8 select data
Syntax: db.collectionName.find({}, {})
db.EmployeeData.find({}, { EmpName: 1, EmpAge: 1 })
db.EmployeeData.find({}, { EmpName: 1, EmpAge: 1, _id: 0 })

db.EmployeeData.find({}, { EmpName: 1, EmpAge: 1, EmpGender: 0 })
    // error :  Cannot do exclusion on field EmpGender in inclusion projection

db.EmployeeData.find({}, { EmpAge: 0, EmpGender: 0 })


db.EmployeeData.find({ EmpName: "Sachin" })


// 9 mongodb query operator
db.EmployeeData.find({ EmpName: "Sachin" })
db.EmployeeData.find({ EmpName: { $eq: "Sachin" } })
db.EmployeeData.find({ EmpAge: { $gte: 39 } })
db.EmployeeData.find({ EmpName: { $in: ["Ali", "Sachin", "Fuzail"] } })


//10. and or not
db.EmployeeData.find({ $and: [{ EmpName: "Sachin", EmpAge: { $gte: 47 } }] })
db.EmployeeData.find({ $and: [{ EmpName: "Sachin", EmpAge: { $gte: 47 } }] })
db.EmployeeData.find({ $and: [{ EmpName: { $eq: "Sachin" }, EmpAge: { $gte: 48 } }] })
db.EmployeeData.find({ $or: [{ EmpName: { $eq: "Sachin" }, EmpAge: { $gte: 21 } }] })
db.EmployeeData.find({ $or: [{ EmpName: { $not: { $eq: "Sachin" } }, EmpAge: { $gt: 21 } }] })


db.EmployeeData.find({ $and: [{ EmpName: "Sachin", EmpAge: { $gte: 47 } }] }, { EmpName: 1, EmpSal: 1, _id: 0 })

db.EmployeeData.insertMany([
    { EmpName: "Ali", EmpGender: "Male", EmpEmail: "raju@gmail.com", EmpAge: 40, EmpSal: 45700, EmpDepart: "CSE", EmpDeg: "Prof" },
    { EmpName: "Aman", EmpGender: "Female", EmpEmail: "somya@gmail.com", EmpAge: 42, EmpSal: 58000, EmpDepart: "ME", EmpDeg: "Manager" },
    { EmpName: "Mayank", EmpGender: "Male", EmpEmail: "fuzail@gmail.com", EmpAge: 21, EmpSal: 156700, EmpDepart: "AIML" }
])


// 11. exists
db.EmployeeData.find({ EmpDepart: { $exists: true, $eq: "CSE" } })
db.EmployeeData.find({ $and: [{ EmpDepart: { $exists: true }, EmpDepart: { $eq: "CSE" } }] })


//12. functions to count() records in collections
db.EmployeeData.find().count()

// 13. pretty()
db.EmployeeData.find().pretty()