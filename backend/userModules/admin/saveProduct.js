const CateogaryModel=require('../../database/category');

module.exports=function saveProduct(req,res){
console.log(req.url);
let check=0;
var myData=req.body;
	var proTobeSaved={
	  pname:myData.name,
	  price:myData.price,
	  os:myData.os,
	  warranty:myData.warranty,
	  processor:myData.processor,
	  pimagePath:myData.pimagePath
	};

	CateogaryModel.findOne({cname:myData.cname}).then(function(result){
		console.log("inside findone");
		let noOfProducts=result.products.length;
		if(noOfProducts===0){
			saveRecord();
		}
		else{
					//condition for checking same name of the product will not exist
			for(let i=0;i<result.products.length;i++){
			console.log("inside for loop");
			if(result.products[i].pname===myData.name){
				check=1;
				console.log("inside if condition");
				return res.json({"err":1,"msg":"Product already existed !!"});
				}
			}
			if(check===0){
					saveRecord();
			}
		}
	
			function saveRecord(){
				result.products.push(proTobeSaved);
				result.save().then(function(err){
				CateogaryModel.findOne({_id:result._id})
					.then(function(result){
						if(result.products.length===(noOfProducts+1))
						{
							return res.json({"msg":"Data Inserted Successfully!!"});
						}
						else
						{
							console.log(err);
							return res.json({"err":1,"msg":"Problem with the server!!"});
						}
					});
					});
			}	
	});

}