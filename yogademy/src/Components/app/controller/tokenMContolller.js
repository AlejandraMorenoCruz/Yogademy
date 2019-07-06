var jwt = require('jsonwentoken');
module.exports = (app, maestroModel)=>{
    app.post('/generate/token', function(req, res){
        console.log('generando token')
        maestroModel.findOne({
            where: {
                usuario: req.body.usuario,
                contrasena: req.body.contrasena
            }
        }).then((resp)=>{
            if(!resp){
                res.send({message:'usuario o contraseña incorrectos'})
            }else{

                claimMaestro={
                    nombre: resp.nombre,
                    email: resp.email
                }

                const token = jwt.sign(claimMaestro, 'secretKey',{expiresIn:'1h'});
                console.log(token)
                res.send(token)
            }
        
    })
})
}