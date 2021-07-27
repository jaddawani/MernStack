const express = require("express");
const app = express();
const faker = require('faker');
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is short for request
// res is short for response


class User {
    constructor(){
this.id =  faker.datatype.uuid();
this.firstName = faker.name.firstName ();
this.lastName = faker.name.lastName();
this.phoneNumber = faker.phone.phoneNumber();
this.email = faker.internet.email();
this.password=faker.internet.password();
}
} 
    
class Company{
    constructor(){
   this._id= faker.datatype.uuid();
   this. name=faker.company.companyName();
   this. street=faker.address.streetName();
   this. city=faker.address.city();
   this. state=faker.address.state();
   this. zipCode=faker.address.zipCode();
   this. country=faker.address.country();

    }
}

app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/users/new", (req, res) => {
    res.json( new User() )
});
app.get("/api/companies/new", (req, res) => {
    res.json( new Company() )
});
app.get("/api/user/company", (req, res) => {
    res.json([ new User() , new Company() ] )
});

app.listen( port, () => console.log(`listing on port ${port}`));