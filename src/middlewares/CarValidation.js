


const CarValidation = async(req, res, next) => {
    const{placa, model, brand, type} = req.body;
    const validarPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
   
    if(validarPlaca.test(placa)){
      if(!model)
         return res.status(400).json({error: 'Modelo é obrigatório'});
      else if(!brand)
         return res.status(400).json({error: 'A marca é obrigatória'});
      else if(!type)
         return res.status(400).json({error: 'Tipo é obrigatório'});
      else{return next()}
      }else {
         return res.status(400).json({error: 'Placa inválda'});
     }
   }




module.exports = CarValidation;