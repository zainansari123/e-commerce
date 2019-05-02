const CateogaryModel=require('../../database/category');
module.exports = function fetchProductByPrice(req,res){
	console.log(req.url);
	let minPrice=req.params.minPrice;
	let maxPrice=req.params.maxPrice;
	console.log(maxPrice);
	console.log(minPrice);
	CateogaryModel.find({}).then(function(result){
		if(result.length===0){
			console.log("No Records");
  			return res.json({error:1,msg:"No Records!!"});
		}
		else{
			//console.log(result);
		var product=[];
		let k=0;		
		for(let i=0;i<result.length;i++){
			for(let j=0;j<result[i].products.length;j++){
				if(result[i].products[j].price>=minPrice && result[i].products[j].price<=maxPrice){
					product[k]={};
					product[k]._id=result[i].products[j]._id;
					product[k].price=result[i].products[j].price;
					product[k].cname=result[i].cname;
					product[k].name=result[i].products[j].pname;
					product[k].os=result[i].products[j].os;
					product[k].warranty=result[i].products[j].warranty;
					product[k].processor=result[i].products[j].processor;
					product[k].pimagePath=result[i].products[j].pimagePath;
					product[k].dat=result[i].products[j].dat;
				k++;	
				}
			}
		}
			if(k==0)
			{
				return res.json({error: 2 , msg:"No Product Exist between this price range"})
			}

			else{
				console.log(product);
				 return res.json({error:0,msg:product})
			}
		}
		
	}).catch(function(err){
		return res.json({error:1,msg:"Some Problem with server.."});
	})

}