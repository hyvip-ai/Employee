function status(req,res){
    res.send({messege:"Your NodeJs app is up and running"})
}

module.exports = {
    status
}