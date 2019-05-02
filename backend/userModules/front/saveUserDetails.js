const userModel=require('../../database/UserDetails');
module.exports=function saveUserDetails(req,res){
	console.log('saveUserDetails');
	console.log(req.body);
	var user=new userModel({
		userName:req.body.userName,
		email:req.body.email,
		password:req.body.password
	});
	user.save(function(err){
		if(err){
			//console.log(err);
			res.json({error:1,msg:"OOps!! Error occurred!!"});
		}
		else
		{
			//console.log("data saved successfully");
			res.json({error:0,msg:"Sign Up done successfully..Proceed for login now!!"})
		}
	})
}