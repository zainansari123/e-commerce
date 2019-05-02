const CateogaryModel=require('../../database/category');

module.exports =function fetchProduct(req,res){
	let catname=req.params.catname;
	console.log(" From fetchProduct"+catname);
	CateogaryModel.findOne({'cname':catname}).then(function(result){
		//console.log(result);
		if(result)
		{
				console.log(result.products);
			if(result.products)
			{
				return res.json({err:0,msg:result.products});
			}
			else
			{
				
				return res.json({err:1,msg:"No Product to display..."});
			}

		}
		else
		{
			return res.json({err:1,msg:"Cateogary not found.."});
		}
		
	});
}