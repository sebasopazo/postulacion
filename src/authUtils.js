const clientSchema = require("./models/client");
const clientApiKeyValidation = async (req,res,next) => {
   const clientApiKey = req.get('api_key');

   if(!clientApiKey){
      return res.status(400).send({
         status:false,
         response:"Missing Api Key"
      });
   }else{
    if(clientApiKey == process.env.API_KEY){
        next();
    }else{
        return res.status(400).send({
            status: false,
            response: "Invalid Api Key"
         });
    }
   }



}

module.exports = clientApiKeyValidation;