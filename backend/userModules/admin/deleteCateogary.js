const CateogaryModel=require('../../database/category');
const fs=require('fs');

module.exports=function deleteCateogary(req,res){
	const data=req.body;
console.log(data.image);
CateogaryModel.findOne({cname:data.item}).then(function(result){
		for(let i=0;i<result.products.length;i++){
			//delete all products image from folder
			fs.unlink(result.products[i].pimagePath);
		}
	CateogaryModel.remove({cname:data.item}).then(function(err){
		CateogaryModel.find({cname:data.item}).then(function(result){
			if(result.length===0){
		//delete 1 cateogary image from folder
			fs.unlink(data.image);
				return res.json({err:0,msg:"Data Deleted Successfully!!"});
			}
			else
			{
				console.log(err);
			}
		})
	});

})
	
}