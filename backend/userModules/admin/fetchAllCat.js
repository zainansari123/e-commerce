const CateogaryModel=require('../../database/category');

module.exports=function fetchAllCateogary(req,res){
	CateogaryModel.find({},function(err,data){
 	if(err){
 		console.log(err);
 		return res.json({error:1,msg:"Some Problem with server.."});
 	}
 	else if(data.length===0){
 	 console.log("No Records");
 	return res.json({error:1,msg:"No Records!!"});
 	}
 	else
 	{
 		return res.json({error:0,msg:data})
 	}
	});
}