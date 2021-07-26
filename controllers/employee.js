const Employee = require('../models/employee')
const fs = require("fs")


function createorgetemployees(req,res){
    
    if(req.method=="POST"){
        const params = req.body
       if(params.ID && params.Name && params.Email && params.PhoneNumber){
           var employee = new Employee()
           employee.ID = params.ID;
           employee.Name = params.Name,
           employee.Email = params.Email,
           employee.PhoneNumber = params.PhoneNumber
           employee.save((err,saved)=>{
               if(err){
                   return res.send({messege:"Error Occured Whilw Saving"})
               }
               if(saved){
                if(fs.existsSync("employee.txt")){
           
                    fs.appendFile("employee.txt",`\n{
                        ID:${params.ID},
                        Name:${params.Name},
                        Email:${params.Email},
                        PhoneNumber:${params.PhoneNumber}
                    }`,(err)=>{
                        if(err){ 
                            return res.send({messege:"Error Occured"})
                        }
                        return res.send({messege:'Saved'})
                    })
                }
                else{
                   
                    fs.writeFile("employee.txt",`{
                        ID:${params.ID},
                        Name:${params.Name},
                        Email:${params.Email},
                        PhoneNumber:${params.PhoneNumber}
                    }`,(err)=>{
                        if(err){
                            return res.send({messege:"Error Occured"})
                        }
                        return res.send({messege:"File Saved"})
                    })
                }
               }
           })
   
       }
       else{
        return res.send({messege:'Invalid Data'})
       }
    }
    else{
        Employee.find({}).exec((err,data)=>{
            if(err){
                res.send({messege:"Error Occured"})
            }
            else{
                res.send({employees:data})
            }
        })
    }

}

function getemployeebyid(req,res){

    Employee.findOne({ID:req.params.id}).exec((err,data)=>{
        if(err){
            return res.send({messege:"Error Occured"})
        }
        if(data){
            return res.send({employee:data})
        }
    })

}
module.exports = {
    getemployeebyid,
    createorgetemployees
}