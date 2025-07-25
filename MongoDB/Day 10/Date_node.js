//1. Date as string
db.DatesDemo.insertMany([
    { EmpName: "Raju", EmpDoj: Date() },
    { EmpName: "Somya", EmpDoj: Date() },
    { EmpName: "Fuzail", EmpDoj: Date() }
])
db.DatesDemo.find({ EmpDoj: { $type: 'string' } })


//2. date as Date object
db.DatesDemo.insertMany([
    { EmpName: "Aman", EmpDoj: new Date() },
    { EmpName: "Sana", EmpDoj: new Date() },
    { EmpName: "Rajesh", EmpDoj: new Date() }
])
db.DatesDemo.find({ EmpDoj: { $type: 'date' } })


//3 ISODate same as new Date() object
db.DatesDemo.insertMany([
    { EmpName: "Aman", EmpDoj: ISODate() },
    { EmpName: "Sana", EmpDoj: ISODate() },
    { EmpName: "Rajesh", EmpDoj: ISODate() }
])
db.DatesDemo.find({ EmpDoj: { $type: 'date' } })


//4. date in standard format using Z
db.DatesDemo.insertMany([
    { EmpName: "Anmol", EmpDoj: ISODate("2025-07-18T00:00:00Z") },
    { EmpName: "Sajal", EmpDoj: ISODate("2025-07-18T00:00:00Z") },
    { EmpName: "Rakesh", EmpDoj: ISODate("2025-07-18T00:00:00Z") }
]);

db.DatesDemo.find({ EmpDoj: { $type: 'date' } })

//5 convert date to string(Date in formated output)
db.DatesDemo.find({ EmpDoj: { $type: 'date' } }, {
        Date_Of_Joining: {
            $dateToString: {
                date: '$EmpDoj',
                format: '%d-%b-%Y %H:%M:%S'
            }
        }
    }) //error :  Executor error during find command: Allenhouse25_DB.DatesDemo :: caused by :: can't convert from BSON type string to Date