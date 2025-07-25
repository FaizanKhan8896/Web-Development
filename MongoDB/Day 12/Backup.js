//to export the data to specified location
'mongoexport --db=Allenhouse25_DB --collection=EmployeeData --out=C:\Users\allen\Desktop\Web-Development-1\MongoDB_Backup\Allenhouse25_DB\EmployeeData.csv'

//to import the data into database
'mongoimport --db=Demo --collection=employees --file=C:\Users\allen\Desktop\Web-Development-1\MongoDB_Backup\Allenhouse25_DB\EmployeeData.json --type=json'