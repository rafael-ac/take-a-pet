var expect = require("chai").expect;
var sinon = require("sinon");
var UserDAO = require("../app/UserDAO");

//const mongoDb = require('mongodb').Db;
//const mongoCollection = require('mongodb').Collection;

var createUserDict = function(){
    return {
        name: "UserName",
        age: "20",
        phone: "51 33333333",
        email: "user@email.com",
        region: "Zona",
        address: "123 john street"
    };
}

it('Should trhow exception when validating user if no age', function(){
    let reqOpt = createUserDict();
    delete reqOpt.age;

    expect(function(){
        UserDAO.validate(reqOpt);        
    }).to.throw("No age provided");  
});

it('Should trhow exception when validating user if no name', function(){
    let reqOpt = createUserDict();
    delete reqOpt.name;

    expect(function(){
        UserDAO.validate(reqOpt);        
    }).to.throw("No name provided");    
});

it('Should trhow exception when validating user if no phone', function(){
    let reqOpt = createUserDict();
    delete reqOpt.phone;

    expect(function(){
        UserDAO.validate(reqOpt);        
    }).to.throw("No phone provided");    
});

it('Should trhow exception when validating user if no email', function(){
    let reqOpt = createUserDict();
    delete reqOpt.email;

    expect(function(){
        UserDAO.validate(reqOpt);        
    }).to.throw("No email provided");    
});

it('Should trhow exception when validating user if no region', function(){
    let reqOpt = createUserDict();
    delete reqOpt.region;

    expect(function(){
        UserDAO.validate(reqOpt);        
    }).to.throw("No region provided");    
});

it('Should trhow exception when validating user if no address', function(){
    let reqOpt = createUserDict();
    delete reqOpt.address;

    expect(function(){
        UserDAO.validate(reqOpt);        
    }).to.throw("No address provided");    
});