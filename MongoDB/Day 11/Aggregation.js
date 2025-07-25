//Aggregation Framework
//$project: for projection
db.employees.aggregate([{ $project: { firstName: 1, lastName: 1, _id: 0 } }])

//$match : to filter values
db.employees.aggregate([{ $match: { gender: 'male' } }])
db.employees.aggregate([{ $match: { salary: { $gte: 7000 } } }])


//$group : assign _id to field to create unique groups
db.employees.aggregate([{ $group: { _id: '$department.name' } }])

//$sum on $group
db.employees.aggregate([{ $group: { _id: '$department.name', TotalSalary: { $sum: '$salary' } } }])

//$avg on $group
db.employees.aggregate([{ $group: { _id: '$department.name', AverageSalary: { $avg: '$salary' } } }])

//$avg $sum $min $max on $group
db.employees.aggregate([{ $group: { _id: '$department.name', AverageSalary: { $avg: '$salary' }, TotalSalary: { $sum: '$salary' }, MinSalary: { $min: '$salary' }, MaxSalary: { $max: '$salary' } } }])

//$sort on AverageSalary
db.employees.aggregate([{ $group: { _id: '$department.name', AverageSalary: { $avg: '$salary' } } }, { $sort: { AverageSalary: 1 } }])


//count in $group
db.employees.aggregate([{ $group: { _id: '$department.name', AverageSalary: { $avg: '$salary' }, TotalSalary: { $sum: '$salary' }, MinSalary: { $min: '$salary' }, MaxSalary: { $max: '$salary' }, TotalEmployee: { $sum: 1 } } }, { $sort: { TotalEmployee: 1 } }])
    //sorting on two field
db.employees.aggregate([{ $group: { _id: '$department.name', AverageSalary: { $avg: '$salary' }, TotalSalary: { $sum: '$salary' }, MinSalary: { $min: '$salary' }, MaxSalary: { $max: '$salary' }, TotalEmployee: { $sum: 1 } } }, { $sort: { TotalEmployee: -1, AverageSalary: 1 } }])

//$limit stage
db.employees.aggregate([{
        $group: {
            _id: '$department.name',
            AverageSalary: { $avg: '$salary' },
            TotalSalary: { $sum: '$salary' },
            MinSalary: { $min: '$salary' },
            MaxSalary: { $max: '$salary' },
            TotalEmployee: { $sum: 1 }
        }
    },
    { $sort: { TotalEmployee: 1 } },
    { $limit: 3 }
])

//$sortByCount combination of $sort and count AND $group and create count(field)
db.employees.aggregate([{ $sortByCount: '$department.name' }])


db.NewEmployee.insertMany([{
        EmpID: 101,
        EmpName: "Alice",
        Department: "Engineering",
        knowledge: ["C", "C++", "Python"]
    },
    {
        EmpID: 102,
        EmpName: "Bob",
        Department: "HR",
        knowledge: ["Communication", "Recruitment"]
    },
    {
        EmpID: 103,
        EmpName: "Charlie",
        Department: "Marketing",
        knowledge: ["SEO", "Google Ads", "Analytics"]
    },
    {
        EmpID: 104,
        EmpName: "David",
        Department: "Engineering",
        knowledge: ["Java", "Spring Boot"]
    },
    {
        EmpID: 105,
        EmpName: "Eva",
        Department: "Finance",
        knowledge: ["Excel", "Budgeting", "Forecasting"]
    },
    {
        EmpID: 106,
        EmpName: "Frank",
        Department: "Engineering",
        knowledge: ["C", "Rust", "Go"]
    },
    {
        EmpID: 107,
        EmpName: "Grace",
        Department: "Design",
        knowledge: ["Figma", "Photoshop"]
    },
    {
        EmpID: 108,
        EmpName: "Helen",
        Department: "Sales",
        knowledge: ["CRM", "Negotiation"]
    },
    {
        EmpID: 109,
        EmpName: "Ian",
        Department: "Engineering",
        knowledge: ["Python", "Django", "Machine Learning"]
    },
    {
        EmpID: 110,
        EmpName: "Jane",
        Department: "Support",
        knowledge: ["Troubleshooting", "Customer Service"]
    }
])


//$unwind break array(like spread operator)
db.EmployeeData.aggregate([{ $group: { _id: '$knowledge' } }])
db.EmployeeData.aggregate([{ $unwind: '$knowledge' }, { $group: { _id: '$knowledge' } }])
db.EmployeeData.aggregate([{ $unwind: '$knowledge' }, { $sortByCount: '$knowledge' }])