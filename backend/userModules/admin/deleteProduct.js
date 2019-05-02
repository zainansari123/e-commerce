const CateogaryModel=require('../../database/category');
const fs=require('fs');
module.exports=function deleteProduct(req,res){
	console.log(req.url);
	console.log(req.body.cname);
	console.log("----------");
	CateogaryModel.findOne({"cname":req.body.cname}).then(function(result){
		if(result){
			for(let j=0;j<result.products.length;j++){
				console.log('inside products');
				result.products=result.products.filter(function(pro){
							console.log(pro.pname!=req.body.name);
								return pro.pname!=req.body.name;
						});
			}
			console.log(result.products);
		}
		CateogaryModel.findOneAndUpdate({"cname":req.body.cname},{"products":result.products}).then(function(){
		 fs.unlink(req.body.pimagePath);
		res.json({"msg":"Data Deleted Successfully!!","err":0});
	}).catch(function(err){
		console.log('going inside catch');
		 console.log(err);
		 return res.json({"msg":"Some Problem with the Server","err":1});
	})
		
	});
	
}