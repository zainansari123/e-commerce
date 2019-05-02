const CateogaryModel=require('../../database/category');
const fs=require('fs');
module.exports=function updatePro(req,res){
	console.log(req.url);
	let products={ "pname":req.body.newProduct.name,
						"os":req.body.newProduct.os,
						"price":req.body.newProduct.price,
						"warranty":req.body.newProduct.warranty,
						"processor":req.body.newProduct.processor,
						"pimagePath":req.body.newProduct.pimagePath
				};
	CateogaryModel.findOne({"cname":req.body.OldProduct.cname},
function(err,cateogary){
	if(err){
		console.log('inside error');
		console.log(err);
		return res.json({"msg":"Problem With Server","err":1});
	}
	else{
		console.log('inside result');
		for(let i=0;i<cateogary.products.length;i++){
			if(cateogary.products[i].pname===req.body.OldProduct.name)
			{
				cateogary.products[i].pname=req.body.newProduct.name;
				cateogary.products[i].os=req.body.newProduct.os;
				cateogary.products[i].price=req.body.newProduct.price;
				cateogary.products[i].warranty=req.body.newProduct.warranty;
				cateogary.products[i].processor=req.body.newProduct.processor;
				cateogary.products[i].pimagePath=req.body.newProduct.pimagePath;
				cateogary.products[i].dat= new Date()
			}
		}
		cateogary.save();
		fs.unlink(req.body.OldProduct.pimagePath);
		return res.json({"msg":"Data Updated Successfully!!","err":0});
	}

});
}