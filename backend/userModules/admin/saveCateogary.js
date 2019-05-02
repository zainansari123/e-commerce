const CateogaryModel=require('../../database/category');

module.exports = function saveCateogary(req,res){
	//console.log(JSON.stringify(req.body));
	var myData=req.body;
	var catItem = CateogaryModel({cname:myData.itemName,cimagePath:myData.imagePath});
	CateogaryModel.find({cname:myData.itemName}).then(function(result){
		if(result.length!==0){
			return res.json({"err":1,"msg":"Data already existed"});
		}
		else
		{
			catItem.save(function(err){
			if(!err){
				return res.json({"err":0,"msg":"Data Inserted Successfully!!"});
			}
			else
			{
				console.log(err);
				return res.json({"err":1,"msg":"Problem with the server"});
			}
			});
		}
	});
}