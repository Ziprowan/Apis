var loginControler = {}

loginControler.iniciarSaludo = function(request,response){

    var Nombre = request.body.Nombre
    var Apellido = request.body.Apellido
    var Direccion = request.body.Direccion

    response.json({mensaje:'Bienvenid@ '+ Nombre + ' ' + Apellido})
}

module.exports.login = loginControler;

