const AdminModel=require('database/admin');
var sha1=require('sha1'); //for saving password in sha1 format
//taking AdminModule exported from admin.js file.

module.exports = function doAuthentication(req,res){

	/*var adminItem = new AdminModel({email:'admin',pass:sha1("admin@123")});
adminItem.save(function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log('data inserted..');
  }
});*/

	var message="";
  console.log(req.body); //get object coming from angular2
  var admin=req.body;

		/*	if(admin.uname==="admin" && admin.upass==="admin@123"){
  				message="Creditianals Matched Successfully...";

 			 }
 			 else
 			 {
  				message ="Error Ocurred...Try Again!!";
  			}	*/
 AdminModel.find({email:admin.uname,pass:sha1(admin.upass)},function(err,data){
 	if(err){
 		return res.json({error:1,msg:"unable to login"});
 	}
 	else if(data.length===0){
 	 //console.log("inside else if"+sha1(admin.upass));
 	return res.json({error:1,msg:"You enetered either wrong password or email id.."});
 	}
 	else
 	{
 		return res.json({error:0,msg:"Logged in Successfully..."})
 	}
});
}
