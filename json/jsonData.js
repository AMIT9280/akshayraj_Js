//Sql  ----> Normal --> field ----> data -----> Object
//No Sql  ----> Collection ----> Document ---> Data ----> Key Value ----> Json Object ---> Data


//data base ----> Data Store 

// name     email    address  age  contact 
// 1 
// 2
//map , Filter   ----> Age = 22 User
//user employees products student customer 
const user = [{
    name: "Amit",
    email: "A@gmail.com",
    address: {
        state: "Gujarat",
        city: "Ahm",
        pincode: 300001
    },
    age: 24,
    contact: 151215251
},
{
    name: "Akshayraj",
    email: "Ak@gmail.com",
    address: {
        state: "UK",
        city: "dd"
    },
    age: 22,
    contact: 15999999
},
{
    name: "raj",
    email: "raj@gmail.com",
    address: {
        state: "usa",
        city: "dd"
    },
    age: 22,
    contact: 15999900099
}
]

 
console.log(user);