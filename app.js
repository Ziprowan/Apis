var express = require('express')
var app = express();

var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


app.post("/sumar", function(request,response){

    var number1 = parseInt(request.body.num1)
    var number2 = parseInt(request.body.num2)

    var resultado = number1 + number2

    response.json({mensaje:'El resultado es: '+ resultado})

})

app.post("/Formulario", function(request,response){

    var Nombre = request.body.nom
    var Apellido = request.body.apel
    var Direccion = request.body.dir

    if (Nombre == null || Nombre == "" || Nombre == undefined){
        response.json({mensaje:"Error!"})
    }
    else if (Apellido == null ||  Apellido == "" || Apellido == undefined){
        response.json({mensaje:"Error!"})
    }
    else if (Direccion == null || Direccion == "" || Direccion == undefined){
        response.json({mensaje:"Error!"})
    }
    else{
        response.json('Bienvenid@'+ Nombre + '' + Apellido)
    }
})



app.use('/',express.static(__dirname + '/Pagina'))

app.listen(3000,function(){
    console.log('server ready in port 3000')
})
