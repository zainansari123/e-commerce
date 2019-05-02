const userModel=require('../../database/UserDetails');

module.exports=function authenticateUser(req,res){
	console.log(req.body);
	userModel.findOne({email:req.body.email,password:req.body.password}).then(function(data){
		if(data){
			console.log(data);
			console.log(req.session);
			req.session.userName=data.userName;
			res.json({error:0,msg:'Login Successfull',uname:req.session.userName});
		}
		else
		{
			console.log('error');
			res.json({error:1,msg:'Login denied'});
		}
	})
}